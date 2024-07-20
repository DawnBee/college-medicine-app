from .models import Events, Announcements, Publications, Testimonials
from django.core.exceptions import ValidationError
from django_resized import ResizedImageField
from django.utils import timezone
from django.test import TestCase
import uuid


class AnnouncementsModelTest(TestCase):
    def setUp(self):
        self.announcement_1 = Announcements.objects.create(
            title='Announcement One',
            image='path/to/image1.png',
            description='Description for announcement one.'
        )
        self.announcement_2 = Announcements.objects.create(
            title='Announcement Two',
            description='Description for announcement two.'
        )

    # Test that announcements are created correctly with the specified fields.
    def test_announcements_creation(self):
        self.assertIsInstance(self.announcement_1.id, uuid.UUID)
        self.assertEqual(self.announcement_1.title, 'Announcement One')
        self.assertEqual(self.announcement_1.image, 'path/to/image1.png')
        self.assertEqual(self.announcement_1.description, 'Description for announcement one.')
        self.assertIsNotNone(self.announcement_1.date_added)

    # Test that the default image is set correctly.
    def test_announcements_default_image(self):
        self.assertEqual(self.announcement_2.image, 'default.png')

    # Test that 'date_added' is set correctly on creation.
    def test_announcements_date_added(self):
        now = timezone.now()
        self.assertAlmostEqual(self.announcement_1.date_added, now, delta=timezone.timedelta(seconds=1))
        self.assertAlmostEqual(self.announcement_2.date_added, now, delta=timezone.timedelta(seconds=1))

    # Test the __str__ method of the Announcements model.
    def test_str_method(self):
        self.assertEqual(str(self.announcement_1), 'Announcement One')
        self.assertEqual(str(self.announcement_2), 'Announcement Two')


class EventsModelTest(TestCase):
	def setUp(self):
		self.event_1 = Events.objects.create(
			title='Event One',
			image='path/to/image1.png',
			description='Description for event one'
		)
		self.event_2 = Events.objects.create(
			title='Event Two',
			description='Description for event two.'
		)

	# Test that 'events' are created with specified fields.
	def test_event_creation(self):
		self.assertIsInstance(self.event_1.id, uuid.UUID)
		self.assertEqual(self.event_1.title, 'Event One')
		self.assertEqual(self.event_1.image, 'path/to/image1.png')
		self.assertEqual(self.event_1.description, 'Description for event one')
		self.assertIsNotNone(self.event_1.date_added)

	# Test that the default image is set correctly.
	def  test_event_default_image(self):
		self.assertEqual(self.event_2.image, 'default.png')

	# Test that 'date_added' is set correctly on creation.
	def test_event_data_added(self):
		now = timezone.now()
		self.assertAlmostEqual(self.event_1.date_added, now, delta=timezone.timedelta(seconds=1))
		self.assertAlmostEqual(self.event_2.date_added, now, delta=timezone.timedelta(seconds=1))

	# Test the '__str__' method of the Event model.
	def test_str_method(self):
		self.assertEqual(str(self.event_1), 'Event One')
		self.assertEqual(str(self.event_2), 'Event Two')


class PublicationsModelTest(TestCase):
    def setUp(self):
        self.publication_1 = Publications.objects.create(
            title='Publication One',
            image='path/to/image1.png',
            description='Description for publication one.',
            pdf='publications/pdfs/document1.pdf'
        )
        self.publication_2 = Publications.objects.create(
            title='Publication Two',
            description='Description for publication two.'
        )

    # Test that publications are created correctly with the specified fields.
    def test_publications_creation(self):
        self.assertIsInstance(self.publication_1.id, uuid.UUID)
        self.assertEqual(self.publication_1.title, 'Publication One')
        self.assertEqual(self.publication_1.image, 'path/to/image1.png')
        self.assertEqual(self.publication_1.description, 'Description for publication one.')
        self.assertEqual(self.publication_1.pdf, 'publications/pdfs/document1.pdf')
        self.assertIsNotNone(self.publication_1.date_added)

    # Test that the default image is set correctly.
    def test_publications_default_image(self):
        self.assertEqual(self.publication_2.image, 'default.png')

    # Test that 'date_added' is set correctly on creation.
    def test_publications_date_added(self):
        now = timezone.now()
        self.assertAlmostEqual(self.publication_1.date_added, now, delta=timezone.timedelta(seconds=1))
        self.assertAlmostEqual(self.publication_2.date_added, now, delta=timezone.timedelta(seconds=1))

    # Test the __str__ method of the Publications model.
    def test_str_method(self):
        self.assertEqual(str(self.publication_1), 'Publication One')
        self.assertEqual(str(self.publication_2), 'Publication Two')

    # Test that the title is unique.
    def test_publications_unique_title(self):
        with self.assertRaises(Exception):
            Publications.objects.create(
                title='Publication One',
                description='Description for a duplicate publication.'
            )


class TestimonialsModelTest(TestCase):
    def setUp(self):
        self.testimonial_1 = Testimonials.objects.create(
            name='Testimonial One',
            image='path/to/image1.png',
            content='Content for testimonial one.'
        )
        self.testimonial_2 = Testimonials.objects.create(
            name='Testimonial Two',
            content='Content for testimonial two.'
        )

    # Test that testimonials are created correctly with the specified fields.
    def test_testimonials_creation(self):
        self.assertIsInstance(self.testimonial_1.id, uuid.UUID)
        self.assertEqual(self.testimonial_1.name, 'Testimonial One')
        self.assertEqual(self.testimonial_1.image, 'path/to/image1.png')
        self.assertEqual(self.testimonial_1.content, 'Content for testimonial one.')
        self.assertIsNotNone(self.testimonial_1.date_added)

    # Test that the default image is set correctly.
    def test_testimonials_default_image(self):
        self.assertEqual(self.testimonial_2.image, 'default.png')

    # Test that 'date_added' is set correctly on creation.
    def test_testimonials_date_added(self):
        now = timezone.now()
        self.assertAlmostEqual(self.testimonial_1.date_added, now, delta=timezone.timedelta(seconds=1))
        self.assertAlmostEqual(self.testimonial_2.date_added, now, delta=timezone.timedelta(seconds=1))

    # Test the __str__ method of the Testimonials model.
    def test_str_method(self):
        self.assertEqual(str(self.testimonial_1), 'Testimonial One')
        self.assertEqual(str(self.testimonial_2), 'Testimonial Two')

    # Test that the name is unique.
    def test_testimonials_unique_name(self):
        with self.assertRaises(Exception):
            Testimonials.objects.create(
                name='Testimonial One',
                content='Content for a duplicate testimonial.'
            )

    # Test that the content length validation works correctly.
    def test_testimonials_content_length(self):
        long_content = 'x' * 401
        with self.assertRaises(ValidationError):
            testimonial = Testimonials(
                name='Testimonial Three',
                content=long_content
            )
            testimonial.full_clean()