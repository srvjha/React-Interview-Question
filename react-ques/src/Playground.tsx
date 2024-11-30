import Toast from "./components/Toast";
import { useState } from "react";

const Playground = () => {
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    duration: 6000,
    position: 'top-right',
    title: '',   
    actionWidth: 354,
    type: 'error', // Default to error
    
  });

  const handleFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.target as HTMLFormElement); // Create FormData object
    const data = Object.fromEntries(formData.entries()); // Convert to an object
    const { username, email } = data;

    // Basic validation
    if (!username || !email) {
      setToast({
        visible: true,
        message: "Please fill in all required fields.",
        duration: 6000,
        position: 'top-right',
        title: 'Validation Error',
        actionWidth: 354,
        type: 'error'
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email as string)) {
      setToast({
        visible: true,
        message: "Please enter a valid email address.",
        duration: 6000,
        position: 'top-right',     
        title: 'Validation Error',     
        actionWidth: 354,       
        type: 'error'
      });
      return;
    }

    // Success
    setToast({
      visible: true,
      message: "Form submitted successfully!",
      duration: 6000,
      position: 'top-right',
      title: 'Success',
      actionWidth: 354,
      type: 'success', // Show as success toast
    });

    console.log("Form data:", data); // Log the form data
  };

  return (
    <div className="ml-10">
      <div className="font-bold text-2xl">Try Toast Notification</div>
      <form
        onSubmit={handleFormData}
        className="flex flex-col space-y-3 w-1/5 mt-5"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="p-2 rounded-lg bg-gray-100"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="p-2 rounded-lg bg-gray-100"
        />
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-lg cursor-pointer hover:bg-gray-700"
        >
          Submit
        </button>
      </form>
      <Toast toast={toast} setToast={setToast} />
    </div>
  );
};

export default Playground;
