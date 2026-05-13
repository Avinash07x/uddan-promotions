import {
  useEffect,
  useState,
} from "react";

import {
  Pencil,
  Trash2,
  X,
} from "lucide-react";

export default function AdminFAQS() {
  //  STATES 
  const [faqs, setFaqs] =
    useState([]);

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  //  FETCH FAQS 
  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/faq"
      );

      const data = await res.json();

      if (data.success) {
        setFaqs(data.faqs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  ADD / UPDATE FAQ 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      //  UPDATE 
      if (editingId) {
        await fetch(
          `http://localhost:5000/api/faq/${editingId}`,
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              question,
              answer,
            }),
          }
        );
      }

      //  ADD 
      else {
        await fetch(
          "http://localhost:5000/api/faq",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              question,
              answer,
            }),
          }
        );
      }

      // RESET
      setQuestion("");

      setAnswer("");

      setEditingId(null);

      fetchFaqs();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //  DELETE FAQ 
  const deleteFaq = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this FAQ?"
      );

    if (!confirmDelete) return;

    try {
      await fetch(
        `http://localhost:5000/api/faq/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchFaqs();
    } catch (error) {
      console.log(error);
    }
  };

  //  EDIT FAQ 
  const editFaq = (faq) => {
    setQuestion(faq.question);

    setAnswer(faq.answer);

    setEditingId(faq._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //  CANCEL EDIT 
  const cancelEdit = () => {
    setQuestion("");

    setAnswer("");

    setEditingId(null);
  };

  return (
    <section className="p-6 text-white">

      {/*  HEADING  */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-3xl font-black">
            FAQ Management
          </h2>

          <p className="text-white/50 mt-1">
            Create, update and delete FAQs
          </p>
        </div>

        {editingId && (
          <button
            onClick={cancelEdit}
            className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-2 rounded-2xl"
          >
            <X size={16} />

            Cancel Edit
          </button>
        )}
      </div>

      {/*  FORM  */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-5"
      >

        {/* QUESTION */}
        <input
          type="text"
          placeholder="Enter FAQ Question"
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
        />

        {/* ANSWER */}
        <textarea
          rows="5"
          placeholder="Enter FAQ Answer"
          value={answer}
          onChange={(e) =>
            setAnswer(e.target.value)
          }
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
        />

        {/* BUTTON */}
        <button
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-2xl font-bold transition disabled:opacity-50"
        >
          {loading
            ? "Please Wait..."
            : editingId
            ? "Update FAQ"
            : "Add FAQ"}
        </button>
      </form>

      {/*  FAQ LIST  */}
      <div className="space-y-4 mt-8">

        {faqs.length === 0 ? (
          <div className="text-center py-10 text-white/50">
            No FAQs Found
          </div>
        ) : (
          faqs.map((faq) => (
            <div
              key={faq._id}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
            >

              {/* TOP */}
              <div className="flex items-start justify-between gap-4">

                <div>
                  <h3 className="font-bold text-lg">
                    {faq.question}
                  </h3>

                  <p className="text-white/60 mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-3">

                  {/* EDIT */}
                  <button
                    onClick={() =>
                      editFaq(faq)
                    }
                    className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center hover:bg-cyan-500/20 transition"
                  >
                    <Pencil size={18} />
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() =>
                      deleteFaq(
                        faq._id
                      )
                    }
                    className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}