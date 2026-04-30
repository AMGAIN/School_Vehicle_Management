"use client";

import { useState } from "react";
import { toast } from "sonner";

import AddParentModal from "./parentsComponents/AddParentModal";
import ParentDetailPanel from "./parentsComponents/ParentDetailPanel";
import ParentSummaryCards from "./parentsComponents/ParentSummaryCards";
import {
  createInitialParentForm,
  mockParents,
} from "./parentsComponents/parentData";
import ParentsActionBar from "./parentsComponents/ParentsActionBar";
import ParentsList from "./parentsComponents/ParentsList";
import type { NewParentForm, Parent } from "./parentsComponents/types";

const Parents = () => {
  const [parents, setParents] = useState<Parent[]>(mockParents);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newParent, setNewParent] = useState<NewParentForm>(
    createInitialParentForm
  );

  const filteredParents = parents.filter(
    (parent) =>
      parent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      parent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      parent.phone.includes(searchQuery)
  );

  const cancelAddModal = () => {
    setShowAddModal(false);
    setNewParent(createInitialParentForm());
  };

  const handleAddParent = () => {
    if (
      !newParent.name ||
      !newParent.email ||
      !newParent.phone ||
      !newParent.address
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    const parentId = `PAR-${String(parents.length + 1).padStart(3, "0")}`;
    const linkedStudentsArray = newParent.linkedStudents
      .split(",")
      .map((student) => student.trim())
      .filter((student) => student.length > 0);

    const newParentData: Parent = {
      id: parentId,
      name: newParent.name,
      email: newParent.email,
      phone: newParent.phone,
      address: newParent.address,
      linkedStudents: linkedStudentsArray,
      qrAuthorized: newParent.qrAuthorized,
      emergencyContact: newParent.emergencyContact,
      appAccess: newParent.appAccess,
      lastActive: "Never",
      notificationPreferences: newParent.notificationPreferences,
    };

    setParents([...parents, newParentData]);
    toast.success(`Parent ${newParent.name} added successfully!`);
    setShowAddModal(false);
    setNewParent(createInitialParentForm());
    setSelectedParent(newParentData);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Parent Management
        </h1>
        <p className="text-gray-600 mt-1">
          Manage parent profiles, QR authorization, and communication
          preferences
        </p>
      </div>

      <ParentSummaryCards parents={parents} />

      <ParentsActionBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onAddParent={() => setShowAddModal(true)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ParentsList
          parents={filteredParents}
          onSelectParent={setSelectedParent}
        />
        <ParentDetailPanel selectedParent={selectedParent} />
      </div>

      {showAddModal && (
        <AddParentModal
          newParent={newParent}
          setNewParent={setNewParent}
          onClose={() => setShowAddModal(false)}
          onCancel={cancelAddModal}
          onAddParent={handleAddParent}
        />
      )}
    </div>
  );
};

export default Parents;
