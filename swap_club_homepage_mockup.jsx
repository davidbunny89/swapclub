import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Film, Popcorn, Sparkles } from "lucide-react";

export default function SwapClubMockup() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen p-6 space-y-16">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Film className="text-pink-500" />
          <h1 className="text-2xl font-bold tracking-wide">SwapClub</h1>
        </div>
        <div className="space-x-4">
          <Button variant="outline">Instagram</Button>
          <Button className="bg-pink-500 hover:bg-pink-600">Join</Button>
        </div>
      </div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 py-20"
      >
        {/* SOAP VISUAL (branding pun) */}
        <motion.img
          src="/soap-swapclub.png" // 👉 replace with your actual image path
          alt="SwapClub soap logo"
          className="mx-auto w-40 rounded-2xl shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <h2 className="text-5xl font-extrabold leading-tight">
          Movies you can hold. Nights you’ll remember.
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          A curated movie experience with snacks, nostalgia, and zero scrolling.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
            Browse Movies
          </Button>
          <Button size="lg" variant="outline">
            View Bundles
          </Button>
        </div>
      </motion.div>

      {/* FEATURED */}
      <div>
        <h3 className="text-2xl mb-6 flex items-center gap-2">
          <Sparkles className="text-pink-500" /> Tonight’s Picks
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"].map(
            (movie) => (
              <motion.div
                key={movie}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-0">
                    <div className="h-40 bg-zinc-800" />
                    <div className="p-3 text-center">
                      <p>{movie}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* BUNDLES */}
      <div>
        <h3 className="text-2xl mb-6 flex items-center gap-2">
          <Popcorn className="text-pink-500" /> Movie Night Bundles
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Solo Night", desc: "1 movie + small candy", price: "€6" },
            { title: "Date Night ❤️", desc: "1 movie + premium snacks", price: "€10" },
            { title: "Friends Pack 🎉", desc: "2 movies + big snacks", price: "€14" },
          ].map((bundle) => (
            <motion.div
              key={bundle.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-zinc-900 rounded-2xl shadow-xl border border-zinc-800">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-xl font-semibold">{bundle.title}</h4>
                  <p className="text-zinc-400">{bundle.desc}</p>
                  <p className="text-2xl font-bold text-pink-500">{bundle.price}</p>
                  <Button className="w-full bg-pink-500 hover:bg-pink-600">Select</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="text-center space-y-8">
        <h3 className="text-2xl">How it works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["Pick a movie or bundle", "Reserve online / message us", "Pick up or delivery"].map(
            (step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-zinc-900 p-6 rounded-2xl shadow-md"
              >
                {step}
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-16 space-y-6"
      >
        <h3 className="text-3xl font-bold">Ready for tonight?</h3>
        <div className="space-x-4">
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600">Browse Movies</Button>
          <Button size="lg" variant="outline">Order a Bundle</Button>
        </div>
      </motion.div>

      {/* FOOTER */}
      <div className="text-center text-zinc-500 text-sm">
        SwapClub © 2026 · Movie nights, reimagined
      </div>
    </div>
  );
}
