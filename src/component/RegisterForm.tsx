import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import image1 from "./assets/3d-rendering-people-portrait.jpg"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  gamerTag: z.string().min(2, {
    message: "Gamer Tag must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  favoriteGameTitle: z.string().min(2, {
    message: "Game title must be at least 2 characters.",
  }),
});

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gamerTag: "",
      email: "",
      favoriteGameTitle: "F",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Test", values);
    localStorage.setItem("gamingRegistration", JSON.stringify(values));
  }

  return (
    <section className="game-bg-2 py-8">
      <div className="max-w-screen-xl flex justify-between mx-auto px-4 py-8">
        <div className="w-full md:w-[45%] p-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Battle!
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Ready to show off your skills and compete with the best? Register
            now for our upcoming gaming tournament and secure your spot in the
            action.
            <br />
            <br />
            Whether you're a casual player or a hardcore warrior, this is your
            chance to shine. Let's see what you've got — bring your A-game!
          </p>
          <div>
            <img src={image1} alt="two boys gaming" />
          </div>
        </div>
        <div className="rounded-lg bg-white/10 p-10 md:w-[45%] backdrop-blur-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl text-white">Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        {...field}
                        className="text-white rounded-none"
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-white/60">
                      Your full name for the registration.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gamerTag"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl text-white">
                      Gamer Tag
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Sniper007"
                        {...field}
                        className="text-white rounded-none"
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-white/60">
                      This will be your display name during the tournament.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="sniper007@email.com"
                        {...field}
                        className="text-white rounded-none"
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-white/60">
                      We'll send your confirmation and updates here.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="favoriteGameTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl text-white">
                      Favorite Game Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Battle Royale"
                        {...field}
                        className="text-white rounded-none"
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-white/60">
                      Just for fun — let us know what you love playing.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
