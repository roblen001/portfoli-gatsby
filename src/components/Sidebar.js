import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaCentercode, FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      {isOpen && (
        <div>
          <Links styleClass="sidebar-links" />
          <div style={{ paddingLeft: 32 }}>
            <SocialLinks styleClass="sidebar-icons" />
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
