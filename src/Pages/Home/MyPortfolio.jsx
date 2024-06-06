import data from "../../data/index.json";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyPortfolio() {
  const navigate = useNavigate();

  const navigateToCourse = (path) => {
    navigate("/courses/" + path);
  };
  return (
    <>
      <ScrollToTop />
      <div className="my-4" style={{ background: "#a9b9be" }}>
        <h1 className="text-center">Yoga & wellness</h1>
        <div className="container mt-2">
          <div className="row align-items-center">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="card text-white my-5 "
                  style={{
                    background: "#a9b9be",
                    borderRadius: "91px 0 91px 0",
                    borderColor: "#a9b9be",
                  }}
                >
                  <img
                    src="../img/yoga-course.jpg"
                    className="card-img"
                    alt="Yoga Pose"
                    style={{
                      borderRadius: "91px 0 91px 0",
                      borderColor: "#a9b9be",
                    }}
                  />
                  <div className="blog_posts_image_content">
                    <span className="badge badge-primary">
                      Traditional hatha yoga
                    </span>
                    {/* <h5 class="card-title">
                    Yoga Effects on Brain Health: A Systematic Review of the
                    Current Literature
                  </h5> */}
                    <br />
                    <a
                      href="/courses/yoga"
                      className="stretched-link"
                      style={{ marginLeft: "8px" }}
                    >
                      <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card text-white my-5"
                  style={{
                    background: "#a9b9be",
                    borderRadius: "91px 0 91px 0",
                    borderColor: "#a9b9be",
                  }}
                >
                  <img
                    src="../img/sound-healing.png"
                    className="card-img"
                    alt="Yoga Pose"
                    style={{
                      background: "#a9b9be",
                      borderRadius: "91px 0 91px 0",
                      borderColor: "#a9b9be",
                    }}
                  />
                  <div className="blog_posts_image_content">
                    <span class="badge badge-primary">Sound bowl healing</span>
                    {/* <h5 class="card-title">
                    Yoga Effects on Brain Health: A Systematic Review of the
                    Current Literature
                  </h5> */}
                    <br />
                    <a
                      href="/courses/sound-healing"
                      className="stretched-link"
                      style={{ marginLeft: "8px" }}
                    >
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card text-white my-5 "
                  style={{
                    background: "#a9b9be",
                    borderRadius: "91px 0 91px 0",
                    borderColor: "#a9b9be",
                  }}
                >
                  <img
                    src="../img/nutrition.jpg"
                    className="card-img"
                    alt="Yoga Pose"
                    style={{
                      borderRadius: "91px 0 91px 0",
                      borderColor: "#a9b9be",
                    }}
                  />
                  <div className="blog_posts_image_content">
                    <span className="badge badge-primary">Nutrition</span>
                    {/* <h5 class="card-title">
                    Yoga Effects on Brain Health: A Systematic Review of the
                    Current Literature
                  </h5> */}
                    <br />
                    <a
                      href="/courses/nutrition"
                      className="stretched-link"
                      style={{ marginLeft: "8px" }}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card text-white my-5 "
                  style={{
                    background: "#a9b9be",
                    borderRadius: "91px 0 91px 0",
                    borderColor: "#a9b9be",
                  }}
                >
                  <img
                    src="../img/massage.png"
                    className="card-img"
                    alt="Yoga Pose"
                    style={{
                      borderRadius: "91px 0 91px 0",
                      borderColor: "#a9b9be",
                    }}
                  />
                  <div className="blog_posts_image_content">
                    <span className="badge badge-primary">Massage</span>
                    {/* <h5 class="card-title">
                    Yoga Effects on Brain Health: A Systematic Review of the
                    Current Literature
                  </h5> */}
                    <br />
                    <a
                      href="/courses/massage"
                      className="stretched-link"
                      style={{ marginLeft: "8px" }}
                    >
                      <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
