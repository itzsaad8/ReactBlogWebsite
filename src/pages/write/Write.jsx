import "./write.css"
import img from '../../asset/new.avif'
const Write = () => {
  return (
    <div className="write">
        <img className="writeimg" src={img} alt="" />
        <form className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                <i className=" writeicon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}} />
                <input type="text" placeholder="title" className="writeinput" autoFocus={true} />
            </div>
            <div className="writeformgroup">
                <textarea className="writeinput writetext" placeholder="write your story" ></textarea>
            </div>
            <button className="writesubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write