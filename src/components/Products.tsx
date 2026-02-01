import { Droplets, Leaf, Wheat, TreePine, Flower2, Mountain } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const products = [
  {
    icon: Wheat,
    name: '复合肥系列',
    description: '氮磷钾科学配比，营养全面均衡，适用于各类大田作物',
    features: ['高效缓释', '营养均衡', '增产明显'],
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Leaf,
    name: '有机肥系列',
    description: '天然有机原料发酵，改良土壤结构，提升作物品质',
    features: ['绿色环保', '改良土壤', '提质增效'],
    color: 'bg-green-500/10 text-green-600',
  },
  {
    icon: Droplets,
    name: '水溶肥系列',
    description: '全水溶配方，即溶即用，滴灌喷灌专用高效肥料',
    features: ['全水溶', '吸收快', '省水省肥'],
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Flower2,
    name: '果蔬专用肥',
    description: '针对果树蔬菜特性研发，促进开花坐果，改善口感',
    features: ['果大味甜', '色泽鲜艳', '提高产量'],
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    icon: TreePine,
    name: '林木专用肥',
    description: '专为苗木林业定制，促进根系发达，增强抗逆性',
    features: ['壮根促长', '抗病抗逆', '绿色安全'],
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: Mountain,
    name: '土壤调理剂',
    description: '修复退化土壤，平衡酸碱度，恢复土地活力',
    features: ['调酸降盐', '疏松土壤', '激活微生物'],
    color: 'bg-amber-500/10 text-amber-600',
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            产品中心
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            全系列<span className="text-gradient">优质肥料</span>产品
          </h2>
          <div className="divider-gradient mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            从复合肥到有机肥，从水溶肥到专用肥，绿丰农业为您提供全方位的肥料解决方案
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/50 card-hover cursor-pointer"
            >
              {/* Icon */}
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                product.color
              )}>
                <product.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="default" size="lg">
            查看全部产品
          </Button>
        </div>
      </div>
    </section>
  )
}
