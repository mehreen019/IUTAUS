import React from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import { eventSegments } from "@/data/events";
import Link from "next/link";
import { notFound } from "next/navigation";

interface EventSegmentPageProps {
  params: { id: string };
}

const EventSegmentPage: React.FC<EventSegmentPageProps> = ({ params }) => {
  const segment = eventSegments.find((s) => s.id === params.id);

  if (!segment) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/events"
              className="flex items-center gap-2 text-muted-foreground hover:text-maroon transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to AutoMech 2025</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-2 text-muted-foreground hover:text-maroon transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-muted-foreground hover:text-maroon transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={segment.image}
          alt={segment.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="text-white max-w-4xl">
              <div className="mb-4">
                <span className="bg-maroon px-3 py-1 rounded-full text-sm font-medium">
                  {segment.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {segment.title}
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                {segment.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    About This Session
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {segment.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This opening ceremony will feature cutting-edge
                    presentations on the latest automotive technologies,
                    sustainable mobility solutions, and the future of
                    transportation. Attendees will gain valuable insights into
                    industry trends and have the opportunity to network with
                    leading professionals in the field.
                  </p>
                </div>

                {/* Speakers */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Featured Speakers
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {segment.speakers.map((speaker, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg"
                      >
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {speaker.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {speaker.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agenda */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Session Agenda
                  </h3>
                  <div className="space-y-4">
                    {segment.agenda.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-card rounded-lg border"
                      >
                        <div className="bg-maroon text-white px-3 py-1 rounded text-sm font-medium min-w-fit">
                          {item.time}
                        </div>
                        <p className="text-foreground">{item.item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl p-6 border sticky top-24">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Event Details
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-maroon" />
                      <div>
                        <p className="font-medium text-foreground">
                          {segment.date}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {segment.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-maroon" />
                      <div>
                        <p className="font-medium text-foreground">
                          {segment.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Tech Convention Center
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-maroon" />
                      <div>
                        <p className="font-medium text-foreground">
                          {segment.capacity}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Limited seating available
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      className="w-full bg-maroon text-white py-3 px-4 rounded-lg font-semibold 
                                     hover:bg-maroon-dark transition-colors duration-300"
                    >
                      Register for This Session
                    </button>
                    <button
                      className="w-full border border-maroon text-maroon py-3 px-4 rounded-lg font-semibold 
                                     hover:bg-maroon hover:text-white transition-colors duration-300"
                    >
                      Add to Calendar
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold text-foreground mb-3">
                      Share This Event
                    </h4>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                        Twitter
                      </button>
                      <button className="flex-1 bg-blue-800 text-white py-2 px-3 rounded text-sm hover:bg-blue-900 transition-colors">
                        LinkedIn
                      </button>
                      <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700 transition-colors">
                        Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Sessions */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Other Sessions You Might Like
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventSegments
                .filter((s) => s.id !== segment.id)
                .slice(0, 3)
                .map((session, index) => (
                  <Link href={`/events/${session.id}`} key={index}>
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-lg transition-shadow cursor-pointer">
                      <img
                        src={session.image}
                        alt={session.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="font-semibold text-foreground mb-2">
                          {session.title}
                        </h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {session.time}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSegmentPage;
