import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#043873] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#043873] font-bold text-sm">W</span>
            </div>
            <span className="text-xl font-semibold">whitespace</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-blue-200">
              Products
            </a>
            <a href="#" className="hover:text-blue-200">
              Solutions
            </a>
            <a href="#" className="hover:text-blue-200">
              Resources
            </a>
            <a href="#" className="hover:text-blue-200">
              Pricing
            </a>
          </nav>
          <Button className="bg-[#FFE492] text-[#043873] hover:bg-[#FFE492]/90">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#043873] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get More Done with whitespace
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </p>
              <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white px-8 py-3 text-lg">
                Try Whitespace free →
              </Button>
            </div>
            <div className="bg-[#C4DEFD] rounded-lg h-80 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Management Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#212529]">
                Project Management
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
              <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white px-8 py-3">
                Get Started →
              </Button>
            </div>
            <div className="bg-[#C4DEFD] rounded-lg h-80 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Together Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 flex items-center justify-center">
              {/* Colorful dots pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute top-4 left-8 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="absolute top-12 right-12 w-4 h-4 bg-green-400 rounded-full"></div>
                  <div className="absolute top-20 left-16 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="absolute bottom-20 left-4 w-4 h-4 bg-red-400 rounded-full"></div>
                  <div className="absolute bottom-16 right-8 w-4 h-4 bg-blue-300 rounded-full"></div>
                  <div className="absolute bottom-8 left-20 w-4 h-4 bg-orange-400 rounded-full"></div>
                  <div className="absolute top-16 right-4 w-4 h-4 bg-green-300 rounded-full"></div>
                  <div className="absolute bottom-12 right-16 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="absolute top-8 left-32 w-4 h-4 bg-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#212529]">
                Work together
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                With whitespace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
              <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white px-8 py-3">
                Try it now →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Extension Section */}
      <section className="bg-[#043873] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Use as{" "}
                <span className="underline decoration-[#FFE492]">
                  Extension
                </span>
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Use the web clipper extension, available on Chrome and Firefox,
                to save web pages or take screenshots as notes.
              </p>
              <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white px-8 py-3">
                Let's Go →
              </Button>
            </div>
            <div className="bg-[#C4DEFD] rounded-lg h-80 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#C4DEFD] rounded-lg h-80 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#212529]">
                Customise it to your needs
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Customise the app with plugins, custom themes and multiple text
                editors (Rich Text or Markdown). Or create your own scripts and
                plugins using the Extension API.
              </p>
              <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white px-8 py-3">
                Let's Go →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#212529]">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Whether you want to get organized, keep your personal life on
              track, or boost workplace productivity, Evernote has the right
              plan for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <div className="text-4xl font-bold mb-6">$0</div>
                <p className="text-gray-600 mb-8">
                  Capture ideas and find them quickly
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Sync unlimited devices
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    10 GB monthly uploads
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    200 MB max. note size
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Customize Home dashboard and access extra widgets
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Connect primary Google Calendar account
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Add due dates, reminders, and notifications to your tasks
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Personal Plan */}
            <Card className="border-2 border-[#FFE492] bg-[#043873] text-white p-8 relative">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Personal</h3>
                <div className="text-4xl font-bold mb-6 text-[#FFE492]">
                  $11.99
                </div>
                <p className="text-blue-100 mb-8">
                  Keep home and family on track
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#FFE492] mr-3" />
                    Sync unlimited devices
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#FFE492] mr-3" />
                    10 GB monthly uploads
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#FFE492] mr-3" />
                    200 MB max. note size
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#FFE492] mr-3" />
                    Customize Home dashboard and access extra widgets
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#FFE492] mr-3" />
                    Connect primary Google Calendar account
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#FFE492] mr-3" />
                    Add due dates, reminders, and notifications to your tasks
                  </li>
                </ul>
                <Button className="w-full bg-[#4F9CF9] hover:bg-[#4F9CF9]/90">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Organization Plan */}
            <Card className="border-2 border-gray-200 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Organization</h3>
                <div className="text-4xl font-bold mb-6">$49.99</div>
                <p className="text-gray-600 mb-8">
                  Capture ideas and find them quickly
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Sync unlimited devices
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    10 GB monthly uploads
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    200 MB max. note size
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Customize Home dashboard and access extra widgets
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Connect primary Google Calendar account
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Add due dates, reminders, and notifications to your tasks
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Work Everywhere Section */}
      <section className="bg-[#043873] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Your work, everywhere you are
          </h2>
          <p className="text-lg mb-12 text-blue-100 max-w-3xl mx-auto">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitespace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white px-8 py-3">
            Try Taskey →
          </Button>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#212529]">
                100% your data
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                The app is open source and your notes are saved to an open
                format, so you'll always have access to them. Uses End-To-End
                Encryption (E2EE) to secure your notes and ensure no-one but
                yourself can access them.
              </p>
              <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white px-8 py-3">
                Read more →
              </Button>
            </div>
            <div className="flex justify-center items-center space-x-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-[#212529]">
            Our sponsors
          </h3>
          <div className="flex justify-center items-center space-x-16 opacity-60">
            <div className="text-2xl font-bold">Apple</div>
            <div className="text-2xl font-bold">Microsoft</div>
            <div className="text-2xl font-bold">Slack</div>
            <div className="text-2xl font-bold">Google</div>
          </div>
        </div>
      </section>

      {/* Apps Integration Section */}
      <section className="bg-[#043873] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 flex items-center justify-center">
              {/* App icons pattern */}
              <div className="relative w-64 h-64">
                <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
                <div className="absolute top-4 right-12 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </div>
                <div className="absolute bottom-8 left-12 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                </div>
                <div className="absolute bottom-4 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#043873] rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">W</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Work with Your Favorite Apps Using whitespace
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Whitespace teams up with your favorite software. Integrate with
                over 1000+ apps with Zapier to have all the tools you need for
                your project success.
              </p>
              <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white px-8 py-3">
                Read more →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#212529]">
            What Our Clients Says
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Whitespace is designed as a collaboration tool for businesses
                  that is a full project management solution."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Oberon Shaw, MCH</div>
                    <div className="text-sm text-gray-500">
                      Head of Talent Acquisition, North America
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-[#4F9CF9] text-white">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6">
                  "Whitespace is designed as a collaboration tool for businesses
                  that is a full project management solution."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Oberon Shaw, MCH</div>
                    <div className="text-sm text-blue-200">
                      Head of Talent Acquisition, North America
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Whitespace is designed as a collaboration tool for businesses
                  that is a full project management solution."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Oberon Shaw, MCH</div>
                    <div className="text-sm text-gray-500">
                      Head of Talent Acquisition, North America
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#043873] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Try Whitespace today</h2>
          <p className="text-lg mb-12 text-blue-100 max-w-2xl mx-auto">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white px-8 py-3 mb-8">
            Try Taskey free →
          </Button>
          <p className="text-sm text-blue-200">On a big team? Contact sales</p>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#043873] text-xs">📱</span>
            </div>
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#043873] text-xs">🖥️</span>
            </div>
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#043873] text-xs">📧</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#043873] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#043873] font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-semibold">whitespace</span>
              </div>
              <p className="text-blue-100 mb-6">
                whitespace was created for the new ways we live and work. We
                make a better workspace around the world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <a href="#" className="hover:text-white">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Customer stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Guides & tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Try It Today</h4>
              <p className="text-blue-100 mb-4">
                Get started for free. Add your whole team as your needs grow.
              </p>
              <Button className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white">
                Start today →
              </Button>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
            <p>©2021 Whitespace LLC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
