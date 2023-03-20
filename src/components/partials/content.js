import '../css/content.css'

function Content({children}) {
    return (
      <div className="container container-style">
        {children}
      </div>
    );
  }

export default Content;