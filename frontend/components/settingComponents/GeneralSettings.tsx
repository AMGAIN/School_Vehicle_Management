import React from 'react'
import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, MapPin, Clock, Palette } from 'lucide-react';

const inputInfo = [
    { title: "School Name", type: "text", defaultVal: "" },
    { title: "Contact Email", type: "email", defaultVal: "" },
    { title: "School Address", type: "text", defaultVal: "" },
];
const GeneralSettings = () => {
    const [schoolName, setSchoolName] = useState('YatriTECH School');
    const [email, setEmail] = useState('admin@yatritech.edu');
    const [address, setAddress] = useState('Sector 62, Noida, Uttar Pradesh - 201301');
    const [morningStart, setMorningStart] = useState('07:00');
    const [morningEnd, setMorningEnd] = useState('08:30');
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('english');

    const handleSave = () => {
        toast.success('Settings saved successfully!');
    };

    const handleCancel = () => {
        setSchoolName('YatriTECH School');
        setEmail('admin@yatritech.edu');
        setAddress('Sector 62, Noida, Uttar Pradesh - 201301');
        setMorningStart('07:00');
        setMorningEnd('08:30');
        setTheme('light');
        setLanguage('english');
        toast.info('Changes discarded');
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">School Information</h3>
                <div className="space-y-4">
                    {
                        inputInfo.map((item, index) => {
                            return (
                                <div key={index}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{item.title}</label>
                                    <input
                                        type={item.type}
                                        defaultValue={item.defaultVal}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Operating Hours
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Morning Shift Start</label>
                        <input
                            type="time"
                            value={morningStart}
                            onChange={(e) => setMorningStart(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Morning Shift End</label>
                        <input
                            type="time"
                            value={morningEnd}
                            onChange={(e) => setMorningEnd(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Appearance
                </h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="auto">Auto</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6EDB]"
                        >
                            <option value="english">English</option>
                            <option value="nepali">Nepali</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                </button>
                <button className="px-6 py-2 bg-[#4F6EDB] text-white rounded-lg hover:bg-[#4F6EDB]/90 transition-colors">
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default GeneralSettings