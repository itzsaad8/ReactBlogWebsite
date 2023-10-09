import "./singlepost.css"
import img from '../asset/hd4.avif'
const Singlepost = () => {
    return (
        <div className="singlepost">
            <div className="singlepostwrapper">
                <img src={img} alt="" className="singlepostimg" />
                <h1 className="singleposttitle">Lorem ipsum dolor sit amet consectetur.
                <div className="singlepostedit">
                    <i className=" singleposticon fa-regular fa-pen-to-square"></i>
                    <i className="singleposticon fa-solid fa-trash"></i>
                </div>
                </h1>
                <div className="singlepostinfo">
                    <span className="singlepostauthor">Author: <b>SAAD</b></span>
                    <span className="singlepostdate">1 hour ago</span>
                </div>
                <p className="singlepostdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum nobis vero tempore quibusdam perferendis, praesentium mollitia accusamus aut molestiae commodi. Aliquam eum est blanditiis molestias iusto quaerat nesciunt quidem illum accusantium explicabo, enim voluptas facilis cum impedit. Possimus nesciunt doloremque, deleniti vero voluptas tempora dolorem aut labore velit.lorem20Dolore dolorum nobis vero tempore quibusdam perferendis, praesentium mollitia accusamus aut molestiae commodi. Aliquam eum est blanditiis molestias iusto quaerat nesciunt quidem illum accusantium explicabo, enim voluptas facilis cum impedit. Possimus nesciunt doloremque, deleniti vero voluptas tempora dolorem aut labore velit.lorem20.mollitia accusamus aut molestiae commodi. Aliquam eum est blanditiis molestias iusto quaerat nesciunt quidem illum accusantium explicabo, enim voluptas facilis cum impedit. Possimus nesciunt doloremque, deleniti vero voluptas tempora dolorem aut labore velit.lorem20Dolore dolorum nobis vero tempore quibusdam perferendis, praesentium mollitia accusamus aut molestiae commodi. Aliquam eum est blanditiis molestias iusto quaerat nesciunt quidem illum accusantium explicabo, enim voluptas facilis cum impedit. Possimus nesciunt doloremque, deleniti vero voluptas tempora dolorem aut labore velit.lorem20</p>
            </div>
        </div>
    )
}

export default Singlepost