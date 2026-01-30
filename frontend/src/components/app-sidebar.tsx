
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
import { RiBookMarkedLine, RiCompassDiscoverLine, RiHome2Line, RiSettings2Line, RiStackLine } from "@remixicon/react"
import { Link, useLocation, useMatchRoute, useRouter } from "@tanstack/react-router"
import { ThemeToggle } from "./theme-toggle"

const items = [
  {
    title: "Home",
    url: "/",
    icon: RiHome2Line,
  },
  {
    title: "Explore",
    url: "/inbox",
    icon: RiCompassDiscoverLine,
  },
  {
    title: "Genres",
    url: "#",
    icon: RiStackLine,
  },
  {
    title: "Favourites",
    url: "#",
    icon: RiBookMarkedLine,
  },
  {
    title: "Settings",
    url: "#",
    icon: RiSettings2Line,
  },
]

export function AppSidebar() {
  const { pathname } = useLocation()

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
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