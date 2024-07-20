from .models import Process, Requirements
from django.utils import timezone
from django.test import TestCase
import uuid


class ProcessModelTest(TestCase):
    def setUp(self):
        self.process_1 = Process.objects.create(
            title="Test Process 1",
            description="This is the first test process."
        )
        self.process_2 = Process.objects.create(
            title="Test Process 2",
            description="This is the second test process."
        )

    # Test that the Process instances are created and retrieved correctly.
    def test_process_creation(self):
        # Retrieve the instances and check attributes
        process_1 = Process.objects.get(title="Test Process 1")
        process_2 = Process.objects.get(title="Test Process 2")

        self.assertIsInstance(process_1.id, uuid.UUID)
        self.assertEqual(process_1.title, "Test Process 1")
        self.assertEqual(process_1.description, "This is the first test process.")
        self.assertIsNotNone(process_1.date_added)

        self.assertIsInstance(process_2.id, uuid.UUID)
        self.assertEqual(process_2.title, "Test Process 2")
        self.assertEqual(process_2.description, "This is the second test process.")
        self.assertIsNotNone(process_2.date_added)

    # Test the __str__ method of the Process model.
    def test_str_method(self):
        expected_str_1 = "Test Process 1"
        expected_str_2 = "Test Process 2"
        self.assertEqual(str(self.process_1), expected_str_1)
        self.assertEqual(str(self.process_2), expected_str_2)

    # Test that the 'date_added' field is correctly set on creation.
    def test_date_added(self):
        self.assertIsNotNone(self.process_1.date_added)
        self.assertIsInstance(self.process_1.date_added, timezone.datetime)
        self.assertIsNotNone(self.process_2.date_added)
        self.assertIsInstance(self.process_2.date_added, timezone.datetime)


class RequirementsModelTest(TestCase):
    def setUp(self):
        self.requirement_1 = Requirements.objects.create(
            name="Test Requirement 1"
        )
        self.requirement_2 = Requirements.objects.create(
            name="Test Requirement 2"
        )

    # Test that the Requirements instances are created and retrieved correctly.
    def test_requirements_creation(self):
        # Retrieve the instances and check attributes
        requirement_1 = Requirements.objects.get(name="Test Requirement 1")
        requirement_2 = Requirements.objects.get(name="Test Requirement 2")

        self.assertIsInstance(requirement_1.id, uuid.UUID)
        self.assertEqual(requirement_1.name, "Test Requirement 1")
        self.assertIsNotNone(requirement_1.date_added)

        self.assertIsInstance(requirement_2.id, uuid.UUID)
        self.assertEqual(requirement_2.name, "Test Requirement 2")
        self.assertIsNotNone(requirement_2.date_added)

    # Test the __str__ method of the Requirements model.
    def test_str_method(self):
        expected_str_1 = "Test Requirement 1"
        expected_str_2 = "Test Requirement 2"
        self.assertEqual(str(self.requirement_1), expected_str_1)
        self.assertEqual(str(self.requirement_2), expected_str_2)

    # Test that the 'date_added' field is correctly set on creation.
    def test_date_added(self):
        self.assertIsNotNone(self.requirement_1.date_added)
        self.assertIsInstance(self.requirement_1.date_added, timezone.datetime)
        self.assertIsNotNone(self.requirement_2.date_added)
        self.assertIsInstance(self.requirement_2.date_added, timezone.datetime)