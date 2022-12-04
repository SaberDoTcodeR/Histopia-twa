import "./LoginCart.css";

interface props {
  text: string;
  buttonBackground: string;
  typeIcon : string
  marginTop? : string | number
  onClick : ()  => void
}

export default function LoginCart(props: props) {

  return (
    <section className="LC-container" style={{marginTop : props.marginTop}}>
        <div className="LC-type-icon-box">
            <img src={props.typeIcon} alt="icon" className="LC-type-icon" />
        </div>
      <div className="LC-text-box">
        <p className="LC-text">
          Your information will be locally
          <br /> stored and your experience limited.
        </p>
      </div>
      <div className="LC-button-box">
        <button
        onClick={() => props.onClick()}
          className="LC-button"
          style={{
            background: `url(${props.buttonBackground})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <img src={props.text} alt="text" className="LC-button-text" />
        </button>
      </div>
    </section>
  );
}
