// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { posts } from '../constants/posts';
import { projects } from '../constants/projects';
import { photos } from '../constants/photos';

export const Home = () => {

  const recentPosts = posts
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 2);

  const recentProjects = projects
  .sort(() => 0.5 - Math.random())
  .slice(0, 2);

  const randomphotos = photos
  .filter(photo => photo.orientation === 'landscape')
  .sort(() => 0.5 - Math.random())
  .slice(0, 2);

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-12 max-w-5xl mx-auto">
      {/* Left Side - Introduction */}
      <div className="lg:w-3/5 pr-8">
        <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
          Hey there, I'm Surya
        </h1>
        <h2 className="text-xl mb-4 text-black/70 dark:text-white/70">
          Software Engineer | Photographer 
        </h2>
        <p className="text-black/60 dark:text-white/60 mb-6 leading-relaxed">
          A Software Engineer by day, a Photographer by night (or whenever the day feels right).
          <span className="block mt-4"> 
            My journey in tech began with the insatiable curiosity of a toddler (minus the tantrums, mostly). 
            Now, I'm obsessed with creating seamless digital magic. When I'm not wrestling with code, 
            you'll find me capturing the fleeting beauty of the world through my lens.
          </span>
          <span className="block mt-4"> 
            Let's connect and build something awesome (or at least mildly entertaining)! 😉
          </span>
        </p>
        <Link 
          to="/about" 
          className="flex items-center mb-6 text-black dark:text-white hover:underline"
        >
          More about me <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        {/* <Link 
          to="/mylifestyle" 
          className="inline-flex items-center text-black dark:text-white hover:underline"
        >
          More about my lifestyle <ArrowRight className="ml-2 h-4 w-4" />
        </Link> */}
      </div>

      {/* Right Side - Highlights */}
      <div className="lg:w-2/5">
        {/* Recent Posts */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">Recent Posts</h3>
            <Link to="/posts" className="text-black/70 dark:text-white/70 hover:underline text-sm">
              View all posts
            </Link>
          </div>
          <div className="space-y-4">
            {recentPosts.map(post => (
              <div key={post.id} className="border border-black/10 dark:border-white/10 p-4 rounded">
                <h4 className="font-medium text-black dark:text-white mb-2">{post.title}</h4>
                <p className="text-sm text-black/60 dark:text-white/60">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">Recent Projects</h3>
            <Link to="/projects" className="text-black/70 dark:text-white/70 hover:underline text-sm">
              View all projects
            </Link>
          </div>
          <div className="space-y-4">
            {recentProjects.map(project => (
              <div key={project.id} className="border border-black/10 dark:border-white/10 p-4 rounded">
                <h4 className="font-medium text-black dark:text-white mb-2">{project.title}</h4>
                <p className="text-sm text-black/60 dark:text-white/60">{project.short_description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photography Preview */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">Photography</h3>
            <Link to="/hobby" className="text-black/70 dark:text-white/70 hover:underline text-sm">
              View gallery
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {randomphotos.map(photo => (
              <div key={photo.id} className="overflow-hidden rounded">
                <img 
                  // src={new URL(photo.src, import.meta.url).href}
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-32 object-cover hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
