import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ReportModal = ({ reported, setReported }) => {
  const { user } = useContext(AuthContext);
  const { name, _id } = reported;

  const handleReport = (event) => {
    event.preventDefault();
    const form = event.target;
    const UserName = form.userName.value;
    const email = form.email.value;
    const reason = form.reason.value;
    const reporting = {
      productName: name,
      UserName,
      email,
      reason,
      reportedId: _id,
    };
    // Send data to the server
    fetch(`${process.env.REACT_APP_ApiUrl}reports`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reporting),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setReported(null);
          toast.success("Report posted");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="report-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="report-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleReport}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="userName"
              type="text"
              placeholder="Your Name"
              value={user?.displayName}
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={user?.email}
              disabled
              className="input w-full input-bordered"
            />
            <h1>Reason For Report</h1>
            <textarea
              className="input-bordered w-full p-3 textarea"
              name="reason"
              type="text"
              placeholder="Reasons"
            ></textarea>

            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
