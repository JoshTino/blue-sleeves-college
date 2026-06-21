export default function Contact() {
  return (
    <section id="contact" className="py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-4 bg-primary">

        <div className="px-8">
          <h2 className="text-3xl mb-4 font-nunito font-bold py-2 text-secondary">Contact Us</h2>
          <p className="mb-2 bg-white w-fit p-2 shadow-xl font-nunito">BLUESLEEVES COLLEGE</p>
          <p className="mb-2 bg-white w-fit p-2 shadow-xl font-nunito">Agege, Lagos State, Nigeria, 100283</p>
          <p className="mb-2 bg-white w-fit p-2 shadow-xl font-nunito">Email: bluesleevescollege@gmail.com</p>
          <p className="mb-2 bg-white w-fit p-2 shadow-xl font-nunito">Phone: +234 70 776 79829</p>
        </div>

        {/*<form className="p-8 shadow rounded-xl">

          <input
            placeholder="Your Name"
            className="w-full bg-white p-3 mb-4 font-nunito" required
          />

          <input
            placeholder="Your Email"
            className="w-full bg-white p-3 mb-4 font-nunito" required
          />

          <textarea
            placeholder="Message"
            className="w-full bg-white p-3 mb-4 font-nunito" required
          ></textarea>

          <button className="bg-secondary text-white px-6 py-3 font-nunito">
            Send Message
          </button>

        </form>*/}

      </div>

    </section>
  );
}