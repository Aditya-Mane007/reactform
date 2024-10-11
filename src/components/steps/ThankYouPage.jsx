import { useContext } from "react"
import { Link } from "react-router-dom"
import ThankYou from "../../assets/images/icon-thank-you.svg"
import { formContext } from "../../context/formContext"

function ThankYouPage() {
  const { resetSteps } = useContext(formContext)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 0",
      }}
    >
      <img src={ThankYou} alt="Thank You" />
      <p style={{ fontSize: "1.5rem", margin: "1rem 0 " }}>Thank you</p>
      <Link to="/" className="user-table-link" onClick={resetSteps}>
        Go to Home page
      </Link>
      <Link to="/userTable" className="user-table-link" onClick={resetSteps}>
        User Table
      </Link>
    </div>
  )
}

export default ThankYouPage
