import projectimage1 from "../assets/project1.png"
import projectimage2 from "../assets/project2.png"

export const projects = [
  {
    id: 1, 
    postId: 3, 
    title: 'Random Project 1', 
    short_description: 'A brief description of Random Project 1.',
    image: projectimage1, 
    blog: '/blog/random-project-1',
    github: 'https://github.com/user/random-project-1',
    github2: 'https://github.com/user/random-project-1-backend',
    blog_markdown: '/src/assets/posts/random_project_1.md',
    tags: ['Tag1', 'Tag2', 'Tag3'] 
  },
  {
    id: 2, 
    postId: null, 
    title: 'Random Project 2', 
    short_description: 'A brief description of Random Project 2.',
    image: projectimage2, 
    blog: '',
    github: 'https://github.com/user/random-project-2',
    github2: '',
    blog_markdown: '',
    tags: ['Tag4', 'Tag5'] 
  },
];