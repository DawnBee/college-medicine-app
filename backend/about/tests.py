from django.core.files.uploadedfile import SimpleUploadedFile
from django.core.exceptions import ValidationError
from .models import Benefactors, Curriculum
from django.utils import timezone
from django.test import TestCase
import uuid
import os


class BenefactorsModelTest(TestCase):
    def setUp(self):
        self.benefactor_1 = Benefactors.objects.create(
            name='john doe',
            position='CEO',
            image='path/to/image1.png'
        )
        self.benefactor_2 = Benefactors.objects.create(
            name='jane smith',
            position='CTO'
        )

    # Test that benefactors are created correctly with the specified fields.
    def test_benefactors_creation(self):
        self.assertIsInstance(self.benefactor_1.id, uuid.UUID)
        self.assertEqual(self.benefactor_1.name, 'john doe')
        self.assertEqual(self.benefactor_1.position, 'CEO')
        self.assertEqual(self.benefactor_1.image, 'path/to/image1.png')

    # Test that the default image is set correctly.
    def test_benefactors_default_image(self):
        self.assertEqual(self.benefactor_2.image, 'default.png')

    # Test the __str__ method of the Benefactors model.
    def test_str_method(self):
        self.assertEqual(str(self.benefactor_1), 'John doe')
        self.assertEqual(str(self.benefactor_2), 'Jane smith')

    # Test that the name is unique.
    def test_benefactors_unique_name(self):
        with self.assertRaises(Exception):
            Benefactors.objects.create(
                name='john doe',
                position='Manager'
            )


class CurriculumModelTest(TestCase):
    def setUp(self):
        # Ensure the singleton instance of Curriculum is created
        if not Curriculum.objects.exists():
            self.curriculum = Curriculum.objects.create(
                pdf=SimpleUploadedFile("test_document.pdf", b"content")
            )
        else:
            self.curriculum = Curriculum.objects.first()

    # Test that the Curriculum instance is created and retrieved correctly.
    def test_curriculum_creation(self):
        # Ensure there's only one Curriculum instance
        curriculum_count = Curriculum.objects.count()
        self.assertEqual(curriculum_count, 1)

        # Retrieve the instance and check attributes
        curriculum = Curriculum.objects.first()
        self.assertIsInstance(curriculum.id, uuid.UUID)
        self.assertTrue(curriculum.pdf.name.endswith('test_document.pdf'))
        self.assertIsNotNone(curriculum.date_added)

    # Test the __str__ method of the Curriculum model.
    def test_str_method(self):
        formatted_date = self.curriculum.date_added.strftime('%B %d, %Y')
        expected_str = f"Curriculum - Added On: {formatted_date}"
        self.assertEqual(str(self.curriculum), expected_str)

    # Test that the file field is correctly handled.
    def test_pdf_file_field(self):
        self.assertTrue(self.curriculum.pdf.name.endswith('test_document.pdf'))

    # Clean up the uploaded file
    def tearDown(self):
        # Remove the file from storage
        if self.curriculum.pdf:
            if os.path.isfile(self.curriculum.pdf.path):
                os.remove(self.curriculum.pdf.path)