import {ArrowDown} from 'lucide-react'
export const HeroSectoin = () =>{

return (

    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center bg-gradie"
>
    <div className="container max-w-4xl mx-auto text-center z-10">
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight
      ">
        <span className=" opacity-0 animate-fade-in text-3xl md:text-4xl font-bold mb-12 text-center">Hi, I'm</span>
        <span className="opacity-0 animate-fade-in-delay-1 text-3xl md:text-4xl  text-primary font-bold mb-12 text-center">Vikash</span>
        <span className="opacity-0 animate-fade-in-delay-2 text-3xl md:text-4xl font-bold mb-12 text-centerl">Mewada</span>
      </h1>
      <p className="text-lg md:text-xl opacity-0 animate-fade-in-delay-3">I craete stellar web experiences with modern technology. specializing in front-end development and python programoing, I build interface that are both beautiful and functional</p>
      <div className="pt-4 opacity-0 animate-fade-in-delay-4">
        <a href="#project"  className='cosmic-button'>view My Work</a>
      </div>


   </div>
 </div>
  
  
  <div className="absolute bottom-1 mb-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
  <span className="text-muted-foreground mb-2">Scroll</span>
  <ArrowDown className="h-5 w-5 text-primary" />
</div>
</section>
);

}

