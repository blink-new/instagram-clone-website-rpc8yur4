import { useState } from 'react'

interface ProfileStats {
  posts: string
  followers: string
  following: string
}

interface StoryHighlight {
  id: string
  emoji: string
  label: string
}

interface Post {
  id: string
  emoji: string
  title: string
  caption: string
  hasVideo?: boolean
  hasOwl?: boolean
}

interface Reel {
  id: string
  emoji: string
  title: string
}

const InstagramProfile = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'reels' | 'tagged'>('posts')
  const [isFollowing, setIsFollowing] = useState(true)
  const [secretClicked, setSecretClicked] = useState(false)

  const stats: ProfileStats = {
    posts: '127',
    followers: '1.4k',
    following: '892'
  }

  const storyHighlights: StoryHighlight[] = [
    { id: '1', emoji: '🥁', label: 'Drum Clips' },
    { id: '2', emoji: '🎹', label: 'Keys' },
    { id: '3', emoji: '🦉', label: 'Sketches' },
    { id: '4', emoji: '🎵', label: 'Tutorials' },
    { id: '5', emoji: '🎧', label: 'Record Finds' }
  ]

  const stories = [
    { id: '1', emoji: '📖', label: 'Studio setup' },
    { id: '2', emoji: '🌧️', label: 'Rainy playlist' },
    { id: '3', emoji: '🎵', label: 'Band outtakes' }
  ]

  const posts: Post[] = [
    { id: '1', emoji: '🥁', title: 'Drum practice closeup', caption: '"Rainy morning groove"', hasVideo: true, hasOwl: true },
    { id: '2', emoji: '🎹', title: 'Synth jam at sunset', caption: '"Soundtrack for a quiet night"' },
    { id: '3', emoji: '🎵', title: 'Band photo', caption: '"Steady heart, wild friends"' },
    { id: '4', emoji: '📝', title: 'Sketchbook page', caption: '"What my brain looks like at midnight"', hasOwl: true },
    { id: '5', emoji: '💿', title: 'Record collection', caption: '"This one feels like home"' },
    { id: '6', emoji: '🐰', title: 'Thistle on keyboard', caption: '"My best audience"' },
    { id: '7', emoji: '🌧️', title: 'Rain rhythms', caption: '"Nature\'s percussion"', hasVideo: true },
    { id: '8', emoji: '☕', title: 'Morning tea setup', caption: '"Pre-practice ritual"' },
    { id: '9', emoji: '🎧', title: 'Headphone sessions', caption: '"Lost in the mix"', hasOwl: true }
  ]

  const reels: Reel[] = [
    { id: '1', emoji: '🥁', title: 'Quick drum fills' },
    { id: '2', emoji: '🎹', title: 'Synth tricks' },
    { id: '3', emoji: '🎵', title: 'Practice moments' },
    { id: '4', emoji: '🌧️', title: 'Rain beats' },
    { id: '5', emoji: '🦉', title: 'Sketch timelapse' },
    { id: '6', emoji: '🐰', title: 'Thistle cameo' }
  ]

  const handleSecretClick = () => {
    setSecretClicked(true)
    // Show notification
    const notification = document.createElement('div')
    notification.innerHTML = '🦉 Secret instrumental unlocked - "Owl Beats at Midnight"'
    notification.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 text-slate-400 px-6 py-4 rounded-xl z-50 text-sm font-medium border border-slate-400 text-center max-w-[280px]'
    document.body.appendChild(notification)
    
    setTimeout(() => {
      notification.remove()
    }, 3000)
  }

  return (
    <div className="max-w-[414px] mx-auto bg-black text-white min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="text-2xl cursor-pointer">←</div>
        <div className="text-lg font-semibold">milo_beats</div>
        <div className="text-2xl cursor-pointer">⋯</div>
      </div>

      {/* Stories Preview */}
      <div className="bg-black border-b border-gray-800 p-3 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
              <div className="w-[66px] h-[66px] rounded-full bg-gradient-to-br from-slate-500 to-slate-600 p-0.5 mb-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xl border-2 border-black">
                  {story.emoji}
                </div>
              </div>
              <div className="text-xs text-white text-center max-w-[66px] truncate">{story.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-4">
        {/* Profile Info */}
        <div className="flex items-center mb-5">
          <div className="w-[86px] h-[86px] rounded-full mr-7 relative bg-gradient-to-br from-slate-500 to-slate-600 p-0.5 cursor-pointer border-2 border-gray-800">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-4xl border-3 border-black relative overflow-hidden">
              🥁
              <div className="absolute inset-0 bg-white/10 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-around mb-4">
              <div className="text-center cursor-pointer hover:-translate-y-0.5 transition-transform">
                <div className="text-lg font-semibold">{stats.posts}</div>
                <div className="text-xs text-gray-400 mt-0.5">posts</div>
              </div>
              <div className="text-center cursor-pointer hover:-translate-y-0.5 transition-transform">
                <div className="text-lg font-semibold">{stats.followers}</div>
                <div className="text-xs text-gray-400 mt-0.5">followers</div>
              </div>
              <div className="text-center cursor-pointer hover:-translate-y-0.5 transition-transform">
                <div className="text-lg font-semibold">{stats.following}</div>
                <div className="text-xs text-gray-400 mt-0.5">following</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all hover:-translate-y-0.5 ${
                  isFollowing 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
              <button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-gray-700 text-white cursor-pointer transition-all hover:bg-gray-600 hover:-translate-y-0.5">
                Message
              </button>
              <button className="flex-1 py-2 px-4 rounded-lg text-sm font-semibold bg-gray-700 text-white cursor-pointer transition-all hover:bg-gray-600 hover:-translate-y-0.5">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-5">
          <div className="text-sm font-semibold text-white mb-1">
            Milo Dray | he/him | 17 | Drummer/Keys, Wildfire Veil
          </div>
          <div className="text-sm text-white mb-1">
            🥁 Drums & keys | Sound explorer | Science + music kid
          </div>
          <div className="text-base text-slate-400 italic my-2" style={{ fontFamily: 'Caveat, cursive' }}>
            "Quiet beats, deep thoughts."
          </div>
          <div className="text-sm text-white mb-1">
            🦉 Owl fan | Market District | Rooftop survivor
          </div>
          <a href="#" className="text-slate-400 text-sm font-medium block mt-1">
            wildfireveil.band
          </a>
        </div>

        {/* Story Highlights */}
        <div className="mb-5">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {storyHighlights.map((highlight) => (
              <div key={highlight.id} className="flex flex-col items-center cursor-pointer hover:-translate-y-1 transition-transform min-w-[66px]">
                <div className="w-[66px] h-[66px] rounded-full bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center text-xl mb-1 border-2 border-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-slate-400/30 relative overflow-hidden">
                  {highlight.emoji}
                  <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                </div>
                <div className="text-xs text-white text-center font-normal">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-800">
        {(['posts', 'reels', 'tagged'] as const).map((tab) => (
          <div 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-center cursor-pointer border-b-2 transition-all hover:bg-white/5 ${
              activeTab === tab 
                ? 'border-white' 
                : 'border-transparent'
            }`}
          >
            <div className={`text-xl ${activeTab === tab ? 'text-white' : 'text-gray-400'}`}>
              {tab === 'posts' && '⊞'}
              {tab === 'reels' && '▶'}
              {tab === 'tagged' && '👤'}
            </div>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      {activeTab === 'posts' && (
        <div className="grid grid-cols-3 gap-0.5">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all hover:scale-105 group"
            >
              {post.hasVideo && (
                <div className="absolute top-1 right-1 bg-black/70 text-white px-1 py-0.5 rounded text-xs z-10">
                  🎥
                </div>
              )}
              <div className="p-2 text-center text-white z-10 relative">
                <span className="text-xl block mb-1">{post.emoji}</span>
                <div className="text-xs">{post.title}</div>
                <div className="text-xs opacity-80 mt-1 leading-tight">{post.caption}</div>
              </div>
              {post.hasOwl && (
                <div className="absolute top-2 right-2 text-sm text-slate-400 opacity-70 animate-bounce z-10">
                  🦉
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'reels' && (
        <div className="grid grid-cols-3 gap-0.5">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="aspect-[9/16] bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center cursor-pointer relative overflow-hidden"
            >
              <div className="p-2 text-center text-white z-10 relative">
                <span className="text-2xl block mb-1">{reel.emoji}</span>
                <div className="text-xs">{reel.title}</div>
              </div>
              <div className="absolute top-2 right-2 text-white text-xs z-10">▶</div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'tagged' && (
        <div className="py-10 px-5 text-center text-gray-400">
          <div className="text-5xl mb-4">👤</div>
          <div className="text-2xl font-light mb-2">No Photos</div>
          <div className="text-sm text-gray-400">
            When people tag you in photos, they'll appear here.
          </div>
        </div>
      )}

      {/* Secret Highlight */}
      <div 
        onClick={handleSecretClick}
        className={`fixed bottom-20 right-5 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer text-2xl z-50 border-3 border-black transition-all ${
          secretClicked 
            ? 'bg-gradient-to-br from-slate-300 to-slate-400' 
            : 'bg-gradient-to-br from-slate-400 to-slate-500 animate-pulse'
        } shadow-lg shadow-slate-400/40`}
        title="Owl beats - secret instrumental"
      >
        {secretClicked ? '🎵' : '🦉'}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[414px] max-w-full bg-black border-t border-gray-800 flex justify-around py-2 z-50">
        {['🏠', '🔍', '➕', '❤️', '👤'].map((icon, index) => (
          <div 
            key={index}
            className={`p-2 cursor-pointer text-2xl transition-all hover:text-gray-400 hover:-translate-y-0.5 ${
              index === 4 ? 'text-white' : 'text-white'
            }`}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Add bottom padding to account for fixed nav */}
      <div className="h-16"></div>
    </div>
  )
}

export default InstagramProfile