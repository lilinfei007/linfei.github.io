import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    content: '山东省济南市高新区科技园路88号',
  },
  {
    icon: Phone,
    title: '联系电话',
    content: '400-888-6666',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: 'contact@lvfeng.com',
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '周一至周六 8:00 - 18:00',
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('感谢您的留言，我们会尽快与您联系！')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 section-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            联系我们
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            与我们<span className="text-gradient">取得联系</span>
          </h2>
          <div className="divider-gradient mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            如有任何问题或合作意向，欢迎随时与我们联系，专业团队将竭诚为您服务
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border/50 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border/50 h-64">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-3" />
                  <p className="text-muted-foreground">山东省济南市高新区科技园路88号</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">在线留言</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    您的姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="请输入姓名"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="请输入电话"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  电子邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="请输入邮箱"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  留言内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  placeholder="请输入您的留言或咨询内容..."
                  required
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                提交留言
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
