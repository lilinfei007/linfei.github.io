import { Leaf, Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = [
  {
    title: '产品中心',
    links: ['复合肥系列', '有机肥系列', '水溶肥系列', '专用肥系列'],
  },
  {
    title: '关于我们',
    links: ['企业简介', '发展历程', '企业文化', '荣誉资质'],
  },
  {
    title: '服务支持',
    links: ['技术指导', '常见问题', '下载中心', '在线客服'],
  },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-primary">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">福欧泰化工</span>
            </div>
            <p className="text-secondary-foreground/70 mb-6 leading-relaxed max-w-sm">
              专注化肥研发生产20余年，以科技创新驱动农业发展，
              为中国农业现代化贡献力量。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>400-816-0061</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="w-4 h-4" />
                <span>QQ: 450505620</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>湖北省武汉市黄陂区蔡家榨镇兴崛大道27号附9号</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
            <p>© 2024 福欧泰化工科技有限公司 版权所有</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary-foreground transition-colors">隐私政策</a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">使用条款</a>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition-colors">鄂ICP备2024076967号-1</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
