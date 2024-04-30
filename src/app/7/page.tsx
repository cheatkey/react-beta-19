"use client";
import React, { useState } from "react";

interface SeventhPageProps {}
class UserProfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.innerHTML = `
          <style>
            .profile-container {
              font-family: Arial, sans-serif;
              background: #f4f4f8;
              border: 1px solid #ccc;
              padding: 10px;
              border-radius: 8px;
              display: block;
              max-width: 300px;
              margin-bottom: 10px;
            }
            .profile-name, .profile-email {
              color: #333;
            }
          </style>
          <div class="profile-container">
            <div class="profile-name"></div>
            <div class="profile-email"></div>
          </div>
        `;
  }

  connectedCallback() {
    this.updateContent();
  }

  static get observedAttributes() {
    return ["name", "email"];
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {
    if (oldValue !== newValue) {
      this.updateContent();
    }
  }

  updateContent() {
    const name = this.getAttribute("name") || "No name provided";
    const email = this.getAttribute("email") || "No email provided";
    this.shadowRoot!.querySelector(".profile-name")!.textContent = name;
    this.shadowRoot!.querySelector(".profile-email")!.textContent = email;
  }
}

customElements.define("user-profile", UserProfile);

const SeventhPage = ({}: SeventhPageProps) => {
  const [name, setName] = useState("John Doe");
  return (
    <>
      <input
        className="text-black"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <user-profile name={name} email="john.doe@example.com"></user-profile>
    </>
  );
};

export default SeventhPage;
