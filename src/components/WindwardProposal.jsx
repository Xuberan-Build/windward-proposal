import { useState } from 'react';
import { Anchor, Ship, Clock, DollarSign, CheckCircle,
         LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';

export default function WindwardProposal() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Executive Summary', icon: Anchor },
    { id: 'scope', label: 'Project Scope', icon: LayoutGrid },
    { id: 'timeline', label: 'Timeline & Deliverables', icon: Clock },
    { id: 'investment', label: 'Investment', icon: DollarSign }
  ];

  const data = {
    currentSituation: [
      "60-page website requiring modernization",
      "Need for seamless transition without interruption",
      "Opportunity to improve UX and conversion rates",
      "Potential to enhance search visibility"
    ],
    monthlyDeliverables: {
      month1: {
        title: "Foundation",
        items: [
          "Project planning and setup",
          "Priority page identification",
          "Initial page migrations (15-20 pages)",
          "Analytics setup and baseline"
        ]
      },
      month2: {
        title: "Core Migration",
        items: [
          "Continued page migrations (20-25 pages)",
          "Redirect implementation",
          "Performance optimization",
          "Progress monitoring and adjustments"
        ]
      },
      month3: {
        title: "Completion",
        items: [
          "Final page migrations",
          "Plugin cleanup",
          "Quality assurance",
          "Launch preparation"
        ]
      }
    },
    outcomes: [
      "Modernized, faster-loading website",
      "Improved user experience",
      "Enhanced mobile responsiveness",
      "Cleaner, more efficient codebase",
      "Increased sales through improved conversion optimization"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Ship className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-xl font-light text-slate-900">WINDWARD SEAVENTURE</h1>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
              <nav className="space-y-1">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <section.icon className="mr-3 h-5 w-5" />
                    <span>{section.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              {activeSection === 'overview' && (
                <div>
                  <h2 className="text-2xl font-light text-slate-900 mb-4">Executive Summary</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    This proposal outlines a comprehensive plan to modernize Windward Seaventure's
                    website through a strategic page-by-page migration, followed by ongoing digital
                    marketing support. Our approach minimizes disruption while maximizing the
                    effectiveness of your online presence.
                  </p>
                  <div className="space-y-2 mb-6">
                    {data.currentSituation.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        <p className="text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <h3 className="font-medium text-slate-900">Timeline</h3>
                      <p className="text-slate-600">3 months initial + ongoing support</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <h3 className="font-medium text-slate-900">Investment</h3>
                      <p className="text-slate-600">$3,000 initial ($1,000/month)</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <h3 className="font-medium text-slate-900">Pages</h3>
                      <p className="text-slate-600">60 pages total migration</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'scope' && (
                <div>
                  <h2 className="text-2xl font-light text-slate-900 mb-4">Project Scope</h2>
                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Website Migration</h3>
                      <div className="grid gap-4">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-slate-600">Page-by-page rebuild using modern page builder</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-slate-600">Strategic 301 redirects implementation</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-slate-600">Mobile responsiveness optimization</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-slate-600">Plugin cleanup and optimization</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Expected Outcomes</h3>
                      <div className="space-y-3">
                        {data.outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                            <p className="text-slate-600">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'timeline' && (
                <div>
                  <h2 className="text-2xl font-light text-slate-900 mb-4">Timeline & Deliverables</h2>
                  <div className="space-y-4">
                    {Object.entries(data.monthlyDeliverables).map(([month, data], index) => (
                      <div key={month} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 font-medium">{index + 1}</span>
                          </div>
                          <h3 className="text-lg font-medium text-slate-900">{data.title}</h3>
                        </div>
                        <div className="space-y-3 pl-11">
                          {data.items.map((item, i) => (
                            <div key={i} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                              <span className="text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'investment' && (
                <div>
                  <h2 className="text-2xl font-light text-slate-900 mb-4">Investment</h2>
                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <h3 className="text-xl font-medium text-slate-900 mb-4">Initial Migration Project</h3>
                      <p className="text-3xl text-blue-600 font-light mb-4">$3,000</p>
                      <div className="space-y-3">
                        <p className="text-slate-600">• $1,000 per month for 3 months</p>
                        <p className="text-slate-600">• Includes all migration work and optimization</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <h3 className="text-xl font-medium text-slate-900 mb-4">Our Guarantee</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          <p className="text-slate-600">Zero downtime during migration</p>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          <p className="text-slate-600">Preservation of all existing content</p>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          <p className="text-slate-600">Comprehensive testing before launch</p>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          <p className="text-slate-600">Responsive support throughout process</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex > 0) {
                      setActiveSection(sections[currentIndex - 1].id);
                    }
                  }}
                  disabled={activeSection === sections[0].id}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${activeSection === sections[0].id
                      ? 'text-slate-400 bg-slate-50 cursor-not-allowed'
                      : 'text-slate-600 bg-slate-50 hover:bg-slate-100'
                    }`}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous Section
                </button>
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex < sections.length - 1) {
                      setActiveSection(sections[currentIndex + 1].id);
                    }
                  }}
                  disabled={activeSection === sections[sections.length - 1].id}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${activeSection === sections[sections.length - 1].id
                      ? 'text-slate-400 bg-slate-50 cursor-not-allowed'
                      : 'text-slate-600 bg-slate-50 hover:bg-slate-100'
                    }`}
                >
                  Next Section
                  <ChevronRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
