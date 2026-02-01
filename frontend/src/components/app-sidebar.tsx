
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { RiHome2Line } from "@remixicon/react"
import { Link, useLocation } from "@tanstack/react-router"
import { ThemeToggle } from "./theme-toggle"

const items = [
  {
    title: "Home",
    url: "/",
    icon: RiHome2Line,
  },
]

export function AppSidebar() {
  const { pathname } = useLocation()

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="gap-4 flex mt-2">
            <img src='/logo.svg' className="w-20" alt="Logo" />
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon color={pathname === item.url ? "var(--primary)" : "var(--sidebar-foreground)"} />
                      <span className={cn("ml-2", {
                        "text-primary": pathname === item.url
                      })}>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}