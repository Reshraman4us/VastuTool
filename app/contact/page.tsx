import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black font-display mb-4">Contact Us</h1>
          <p className="text-zinc-600 dark:text-zinc-400">We&apos;re here to help with any questions or feedback.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <Mail className="text-amber-500 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">Our team typically responds within 24 hours.</p>
            <a href="mailto:support@vastutool.com" className="text-amber-500 font-bold hover:underline">support@vastutool.com</a>
          </div>

          <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <MessageSquare className="text-amber-500 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-2">Feedback</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">Have a tool suggestion? We&apos;d love to hear it.</p>
            <a href="#" className="text-amber-500 font-bold hover:underline">Submit Feedback</a>
          </div>

          <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <MapPin className="text-amber-500 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">Headquartered in the USA, serving the world.</p>
            <span className="text-zinc-900 dark:text-white font-bold">Silicon Valley, CA</span>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-8 text-center">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"></textarea>
            </div>
            <button className="w-full py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
