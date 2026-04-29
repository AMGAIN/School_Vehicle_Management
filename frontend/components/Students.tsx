"use client";

import { useState } from "react";

import AddStudentModal from "./studentsComponents/AddStudentModal";
import StudentDetailPanel from "./studentsComponents/StudentDetailPanel";
import { mockStudents } from "./studentsComponents/studentData";
import StudentsActionBar from "./studentsComponents/StudentsActionBar";
import StudentsList from "./studentsComponents/StudentsList";
import type { Student } from "./studentsComponents/types";

const Students = () => {
  const [students] = useState<Student[]>(mockStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Student Management
        </h1>
        <p className="text-gray-600 mt-1">
          Manage student profiles, bus assignments, and attendance
        </p>
      </div>

      <StudentsActionBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onAddStudent={() => setShowAddModal(true)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StudentsList
          students={filteredStudents}
          onSelectStudent={setSelectedStudent}
        />
        <StudentDetailPanel selectedStudent={selectedStudent} />
      </div>

      {showAddModal && (
        <AddStudentModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
};

export default Students;
