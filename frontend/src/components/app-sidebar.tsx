
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { RiCalendar2Line, RiHome2Line, RiInbox2Line, RiSearch2Line, RiSettings2Line } from "@remixicon/react"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: RiHome2Line,
  },
  {
    title: "Inbox",
    url: "inbox",
    icon: RiInbox2Line,
  },
  {
    title: "Calendar",
    url: "#",
    icon: RiCalendar2Line,
  },
  {
    title: "Search",
    url: "#",
    icon: RiSearch2Line,
  },
  {
    title: "Settings",
    url: "#",
    icon: RiSettings2Line,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}