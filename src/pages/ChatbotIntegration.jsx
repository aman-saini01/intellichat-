import React, { useState } from 'react';

// Custom Button Component
const Button = ({ children, className = '', size = 'default', ...props }) => {
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2',
    large: 'px-6 py-3'
  };

  return (
    <button 
      className={`rounded-md font-medium flex items-center justify-center transition-all ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};


const Modal = ({ isOpen, onClose, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative bg-gradient-to-b from-gray-900 to-black border-2 border-blue-500/20 rounded-lg shadow-xl max-w-3xl w-full m-4 ${className}`}>
        {children}
      </div>
    </div>
  );
};

// InfoCard Component
const InfoCard = ({ title, children, className = '' }) => (
  <div className={`bg-white/5 border-blue-500/20 border-2 rounded-lg p-4 ${className}`}>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    {children}
  </div>
);

const ChatbotIntegration = () => {
  const [showTestSite, setShowTestSite] = useState(false);
  const [showIntegration, setShowIntegration] = useState(false);
  const [activeTab, setActiveTab] = useState('code');

  const dummyCode = `<!-- Add this code to your website's <head> section -->
<script>
  window.chatbotConfig = {
    apiKey: 'demo-key-123',
    position: 'bottom-right',
    theme: 'light'
  };
</script>
<script src="https://chatbot-cdn.example.com/widget.js"></script>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8 mt-10">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            AI Chatbot Integration
          </h1>
          <p className="text-blue-200 mb-4">Power up your website with intelligent customer support</p>
          <div className="max-w-2xl mx-auto bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
            <p className="text-sm text-blue-100">
              Our AI chatbot handles customer inquiries 24/7, reduces support costs by up to 30%, and improves response times by 80%.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            size="small"
            className="bg-blue-600 hover:bg-blue-700 text-white  cursor-pointer"
            onClick={() => setShowTestSite(true)}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Test Chatbot
          </Button>

          <Button 
            size="small"
            className="bg-purple-600 hover:bg-purple-700 text-white  cursor-pointer"
            onClick={() => setShowIntegration(true)}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Integrate Now
          </Button>

          <Button 
            size="small"
            className="bg-pink-600 hover:bg-pink cursor-pointer" 
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Test Integration
          </Button>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white text-center">Key Features & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard title="24/7 Customer Support">
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Instant responses to common queries</li>
                <li>• Multiple language support</li>
                <li>• Custom welcome messages</li>
              </ul>
            </InfoCard>
            
            <InfoCard title="Smart Integration">
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• One-click installation</li>
                <li>• Customizable appearance</li>
                <li>• Mobile-responsive design</li>
              </ul>
            </InfoCard>
            
            <InfoCard title="Advanced Analytics">
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Conversation tracking</li>
                <li>• User satisfaction metrics</li>
                <li>• Performance insights</li>
              </ul>
            </InfoCard>
          </div>
        </div>

        {/* Implementation Guide */}
        <InfoCard title="Implementation Process" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-gray-300 text-sm">
              <div className="text-blue-400 font-semibold mb-2">1. Test</div>
              <p>Preview chatbot functionality in our demo environment</p>
            </div>
            <div className="text-gray-300 text-sm">
              <div className="text-blue-400 font-semibold mb-2">2. Customize</div>
              <p>Configure responses and appearance to match your brand</p>
            </div>
            <div className="text-gray-300 text-sm">
              <div className="text-blue-400 font-semibold mb-2">3. Integrate</div>
              <p>Add the code snippet to your website</p>
            </div>
            <div className="text-gray-300 text-sm">
              <div className="text-blue-400 font-semibold mb-2">4. Launch</div>
              <p>Go live and start engaging with customers</p>
            </div>
          </div>
        </InfoCard>

        
        <Modal isOpen={showTestSite} onClose={() => setShowTestSite(false)}>
          {/* Test Site Modal Content */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Test Website with Chatbot</h2>
              <button onClick={() => setShowTestSite(false)} className="text-gray-400 hover:text-white  cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gray-800 rounded-lg min-h-[500px] relative">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 text-center rounded-t-lg">
                Chatbot not working as intended? Share feedback
              </div>
              
              <div className="mt-16 text-center text-gray-400">
                Demo Website Content
              </div>

              <div className="fixed bottom-20 right-8">
                <Button size="small" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg  cursor-pointer">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Chat with AI
                </Button>
              </div>
            </div>
          </div>
        </Modal>

        {/* Integration Modal */}
        <Modal isOpen={showIntegration} onClose={() => setShowIntegration(false)}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Integration Options</h2>
              <button onClick={() => setShowIntegration(false)} className="text-gray-400 hover:text-white  cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="border-b border-gray-700 mb-4">
              <div className="flex space-x-4">
                <button
                  className={`py-2 px-4 -mb-px ${activeTab === 'code' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400  cursor-pointer' }`}
                  onClick={() => setActiveTab('code')}
                >
                  Copy-Paste Integration
                </button>
                <button
                  className={`py-2 px-4 -mb-px ${activeTab === 'email' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400  cursor-pointer'}`}
                  onClick={() => setActiveTab('email')}
                >
                  Email to Developer
                </button>
              </div>
            </div>

            {activeTab === 'code' ? (
              <div>
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4 mb-4 ">
                  <h3 className="text-white font-semibold mb-2">Integration Instructions</h3>
                  <p className="text-blue-200">
                    Copy the following code and paste it within the {'<head>'} section of your website.
                  </p>
                </div>
                <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto text-blue-300 border border-blue-500/20">
                  <code>{dummyCode}</code>
                </pre>
                <Button size="small" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white  cursor-pointer">
                  Copy Code
                </Button>
              </div>
            ) : (
              <div>
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Developer Instructions</h3>
                  <p className="text-blue-200">
                    We'll send detailed integration instructions to your development team.
                  </p>
                </div>
                <Button size="small" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white  cursor-pointer">
                  Send to Developer
                </Button>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ChatbotIntegration;