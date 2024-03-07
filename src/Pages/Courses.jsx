import ScrollToTop from "./Home/ScrollToTop";
import { useParams } from "react-router-dom";
import data from "../data/index.json";

export default function Courses() {
  const { name } = useParams(); // Unpacking and retrieve id

  const renderCourse = (item) => {
    if (item.title === name) {
      return (
        <div className="courses--content--box">
          <div className="courses--heading">
            <h3>{item.title}</h3>
          </div>
          <div className="courses--content">
            {/* <p>{item.description}</p> */}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              praesentium doloremque exercitationem odio facere excepturi
              voluptatibus in ab, aperiam possimus voluptate perspiciatis
              fugiat, optio voluptas, commodi blanditiis. Perferendis accusamus
              voluptates nulla sapiente tempore, dolores voluptatem unde autem
              reiciendis ratione repudiandae. Culpa perspiciatis, ducimus
              quaerat deleniti quos, iste nihil veritatis delectus totam iure
              dignissimos repudiandae dolorum eum. Delectus iste, incidunt
              voluptates debitis voluptate exercitationem recusandae animi
              perferendis possimus est perspiciatis deleniti veniam fuga dolorem
              sit accusamus natus dolores illum inventore aliquam rerum placeat.
              Quisquam tenetur exercitationem eius voluptate autem sapiente
              aliquam sint reiciendis fugiat. Error perspiciatis aperiam harum
              architecto facilis reiciendis, labore commodi excepturi
              recusandae, minima vero quis? Aliquam voluptatum quasi eveniet
              corrupti quidem, est repellendus iusto eius tenetur quibusdam
              fugit cumque, natus laboriosam sapiente rerum, quaerat eum autem?
              Eveniet, enim laborum maxime culpa nemo eligendi. Commodi, quam
              maxime iure quia, asperiores beatae soluta impedit officia fugit
              accusamus veritatis rerum unde ad expedita quaerat odio facere
              possimus! Debitis tempora quos, ipsam perspiciatis neque, autem
              repellat explicabo delectus libero inventore tempore culpa
              voluptates reiciendis voluptas ipsa sapiente ipsum totam. Suscipit
              laboriosam commodi necessitatibus molestiae obcaecati praesentium,
              quidem consequuntur. Nostrum ut voluptatum, velit expedita
              reprehenderit consequuntur in quia, incidunt, numquam neque
              praesentium vero nihil nulla consectetur laborum repellat iste?
              Sed necessitatibus repellendus in earum! Officia autem ipsam harum
              eligendi numquam voluptatem a quo nesciunt in. Temporibus autem
              dicta quisquam unde ducimus illum laboriosam deleniti sit culpa
              delectus vitae, officia repudiandae aperiam est sunt cupiditate
              obcaecati ad a quae natus! Dolores dolorum ratione animi illo
              fugit commodi mollitia accusantium iusto nesciunt aliquid cumque,
              eum, ducimus dicta corporis eos cupiditate, ullam nemo. Illo
              nostrum quis tempore libero beatae recusandae officiis inventore
              autem repellendus in, odit suscipit est delectus eveniet fuga
              consequuntur, at labore natus debitis doloremque perspiciatis
              dolore esse quos commodi. Quos labore illo officiis ea modi
              aperiam quam, repellat explicabo ab consectetur dolore sequi, ipsa
              voluptate sapiente. Eaque natus harum quae labore rerum quaerat
              quisquam, similique quibusdam doloremque tempora, obcaecati
              eveniet asperiores ratione dolorem possimus, animi necessitatibus
              cumque veritatis error fugit facilis reprehenderit perferendis
              architecto recusandae! Soluta, quos nihil unde cum fuga,
              reiciendis error praesentium et facilis dicta labore? Vero, quas
              necessitatibus, similique alias labore repellat ea rem veniam nemo
              saepe fuga ab recusandae. Accusantium doloremque, perferendis nemo
              totam facilis quidem rerum aspernatur aut deleniti odio inventore
              amet illo voluptate? Modi voluptatem ab quo delectus repellat
              dolorum quod error illum nihil aspernatur adipisci dignissimos
              corporis pariatur sapiente reprehenderit consequatur, tempora,
              molestiae ratione? Id vel quis harum accusantium, voluptate
              reprehenderit error ullam nulla incidunt dolor non molestias
              aliquid dolorem modi quo assumenda doloremque sequi recusandae
              mollitia tempora! Corrupti explicabo tempore, optio numquam porro
              temporibus impedit sequi error necessitatibus eligendi magni
              ratione nostrum vitae facilis cum recusandae quasi. Maiores atque
              fugiat aspernatur illum corrupti vero iure, velit omnis
              exercitationem minus enim accusantium pariatur asperiores aliquid
              cupiditate, at fugit animi, doloribus impedit. Unde fugiat
              ratione, commodi magnam odio doloribus assumenda saepe aut
              reprehenderit adipisci ab facilis consequuntur id perspiciatis
              ipsum dolorum amet fugit ducimus. Fuga, tempora nam!
            </p>
          </div>
          <div className="my--journey--photos">
            <img src={item.src} alt="" />
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <ScrollToTop />
      <section id="MyJourney" className="courses--section">
        {data?.courses?.map((item, index) => renderCourse(item))}
      </section>
    </>
  );
}
