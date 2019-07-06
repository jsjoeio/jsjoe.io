import React from "react"
import styled from "styled-components"

const Subscribe = styled.input`
  max-width: 150px;
  border: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  transition: all 0.3s ease;
  margin-top: 4px;

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 1);
  }
`

const Link = styled.a`
  &:hover,
  &:active,
  &:focus {
    background-color: rgba(0, 0, 0, 1);
  }
`

const ButtondownEmailForm = () => (
  <div>
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/jsjoeio"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://buttondown.email/jsjoeio', 'popupwindow')"
      class="embeddable-buttondown-form"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label for="bd-email">Enter your email:</label>
      <input
        type="email"
        name="email"
        id="bd-email"
        placeholder="peterparker@gmail.com"
      />
      <input type="hidden" value="1" name="embed" />
      <Subscribe type="submit" value="Subscribe" />
      <p style={{ fontSize: "0.65rem" }}>
        <a href="https://buttondown.email" target="_blank">
          Powered by Buttondown.
        </a>
      </p>
    </form>
  </div>
)

export default ButtondownEmailForm
