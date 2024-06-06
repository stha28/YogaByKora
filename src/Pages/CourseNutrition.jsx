import Footer from "./Home/Footer";
import HeroSection from "./Home/HeroSection";
import ScrollToTop from "./Home/ScrollToTop";

export default function CourseNutrition() {
  return (
    <>
      <ScrollToTop />
      <HeroSection page="nutrition" classname="nutrition" title="Nutrition" />
      <section id="AboutMe" className="container my-4 about-section with-background">
        <h1 className="text-center">Nutrition</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 content-box mb-3">
            <p>
              The aim of food rebalancing is first and foremost to improve your
              lifestyle and learn how to eat healthily... so it applies to
              everyone, whether you're trying to lose weight or not. Rebalancing
              your diet means learning to balance your plate and implementing
              these changes over time, so that you know which food categories
              and quantities your body needs for good health, and learn to
              listen to your body.
            </p>
            <p>
              Our aim? To help you develop healthy eating habits to avoid
              deficiencies, excess weight and illness.
            </p>
            <p>
              My consultations are based on respect, listening to your needs and
              sharing. Food rebalancing is not a slimming diet, it's a way of
              life, a daily way of eating healthily to provide your body with
              the energy it needs to meet its vital requirements. Let's not
              forget that food is our fuel, our ally! Health food before
              slimming food.
            </p>
            <h1 className="text-center">
              What happens during a coaching session?
            </h1>
            <p>
              First, I give you a questionnaire so that I can get to know you,
              your lifestyle and your eating habits. I ask you to write down all
              your meals in your food diary over 3 consecutive days + 1 weekend
              day, so that I can analyze your habits. This questionnaire and the
              food diary are invaluable tools for preparing a customized
              rebalancing program tailored to YOUR needs. We'll then have our
              first telephone appointment. This will enable us to introduce
              ourselves and discuss your questionnaire feedback in greater
              detail, so that we can offer you a customized program based on
              your objectives.
            </p>
            <p>
              We don't have the same background, the same knowledge, the same
              habits, the same lifestyle or the same constraints. You're unique,
              and so should your treatment. If you're aiming to lose weight,
              I'll guide you in that direction, but never at the expense of
              balance and health.We'll then have our first telephone
              appointment. This will enable us to introduce ourselves and
              discuss your questionnaire feedback in greater detail, so that we
              can offer you a customized program based on your objectives.
            </p>
            <p>
              We don't have the same background, the same knowledge, the same
              habits, the same lifestyle or the same constraints. To maintain
              stable health, it's recommended that you lose no more than
              500g/week. In other words, it's not healthy to lose 5 kilos in 2
              weeks, or 10 kilos in 8 weeks.That's why my programs last a
              minimum of 3 months. So as not to shock the body into a sudden and
              unhealthy change. What's more, I'm here to help you get back to
              full health, and that doesn't just mean diet. Health is a life
              balance, and there are several factors to take into account in
              this balance in addition to nutrition: emotions, stress, sleep and
              physical activity.
            </p>
            <p>
              If one factor is not stable, weight loss can be blocked. Full
              health is the balance of these 5 factors, what we call the 5
              factors of life. Together, we'll assess these different factors
              and put in place daily ways of balancing them, so that you become
              a player in your own health. It's not difficult to find full
              health, but it's essential to be accompanied because your health
              is precious. Following our first telephone consultation, I'll draw
              up a complete and personal nutritional assessment and send it to
              you by e-mail. So let's start this adventure together
            </p>
            <h1 className="text-center">Food education workshop</h1>
            <p>
              Because food education is a priority for all ages, I can provide
              group workshops in companies, schools, sports clubs and other
              structures, to teach everyone what's good for their health and
              what's not. These informative food education workshops are
              tailored to your requirements and the audience concerned. Health
              is precious, so offer your employees, your young and old athletes
              and your children the chance to improve their health. to improve
              their health.
            </p>
          </div>
        </div>
        <div className="row p-5"></div>
      </section>
      <Footer></Footer>
    </>
  );
}
