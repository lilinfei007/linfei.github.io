export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-harvest rounded-full blur-3xl" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary-foreground rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-harvest rounded-full animate-float animation-delay-200 opacity-60" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-primary-foreground rounded-full animate-float animation-delay-400 opacity-60" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-harvest rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              专业化工生产商 · 值得信赖的合作伙伴
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-200 text-shadow-lg leading-tight">
            科技赋能农业
            <br />
            <span className="text-harvest">丰收从这里开始</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-400 leading-relaxed">
            福欧泰化工专注化肥研发生产20余年，以科学配方和先进工艺，
            为全国农户提供高效、环保的肥料解决方案
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 animate-fade-in animation-delay-600">
            {[
              { number: '20+', label: '年行业经验' },
              { number: '500+', label: '产品种类' },
              { number: '100万', label: '服务农户' },
              { number: '30+', label: '省市覆盖' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  )
}
