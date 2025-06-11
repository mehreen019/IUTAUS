import React from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";
import { eventSegments } from "@/data/events";
import Link from "next/link";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const EventPage = () => {
  const getCategoryColor = (category: string) => {
    const colors = {
      Ceremony: "bg-maroon text-white",
      Workshop: "bg-blue-600 text-white",
      Panel: "bg-green-600 text-white",
      Competition: "bg-purple-600 text-white",
      Networking: "bg-orange-600 text-white",
    };
    return colors[category as keyof typeof colors] || "bg-gray-600 text-white";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <FloatingNav navItems={navItems} />
      <div className="relative h-[80vh] bg-gradient-to-r from-maroon to-maroon-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AutoMech 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              The Future of Automotive Engineering & Innovation
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>August 15-16, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>IUT, Gazipur</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>500+ Participants</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Overview */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About AutoMech 2025
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AutoMech 2025 brings together the brightest minds in automotive
              engineering, featuring cutting-edge workshops, expert panels, and
              innovative showcases. Join us for two days of learning,
              networking, and exploring the future of mobility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
              <Award className="w-12 h-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Speakers</h3>
              <p className="text-muted-foreground">
                Industry leaders sharing insights on automotive innovation
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
              <Users className="w-12 h-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-muted-foreground">
                Connect with professionals and peers in the automotive field
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
              <Clock className="w-12 h-12 text-maroon mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-muted-foreground">
                Interactive workshops and practical demonstrations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Segments */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Event <span className="text-maroon">Schedule</span>
          </h2>

          <div className="max-w-6xl mx-auto">
            {eventSegments.map((segment, index) => (
              <Link href={`/events/${segment.id}`} key={segment.id}>
                <div
                  className="group mb-8 bg-card rounded-xl shadow-sm border overflow-hidden 
                         hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <img
                        src={segment.image}
                        alt={segment.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                            segment.category
                          )}`}
                        >
                          {segment.category}
                        </span>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-maroon transition-colors">
                          {segment.title}
                        </h3>
                        <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-maroon transition-colors" />
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {segment.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{segment.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{segment.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Registration CTA */}
      <div className="py-20 bg-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join AutoMech 2025?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don&apos;t miss this opportunity to be part of the automotive
            engineering revolution. Register now and secure your spot at the
            most anticipated event of the year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-maroon px-8 py-4 rounded-lg font-semibold 
                             hover:bg-gray-100 transition-colors duration-300"
            >
              Register Now
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold 
                             hover:bg-white hover:text-maroon transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
