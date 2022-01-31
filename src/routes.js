// importar as pages
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Events from "./pages/Events";

//importar os icones

import IconDashboard from "./assets/images/icon-dashboard-menu.png";
import IconCalendar from "./assets/images/icon-calendar.png";
import IconTasks from "./assets/images/icon-tasks.png";

//importar o router dom
import { Route, Switch } from "react-router-dom";

// falta o resto e o menu

export const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: <Dashboard />,
    icon: IconDashboard,
  },
  {
    name: "Tasks",
    path: "/tasks",
    component: <Tasks />,
    icon: IconTasks,
  },
  {
    name: "Events",
    path: "/events",
    component: <Events />,
    icon: IconCalendar,
  },
];

export const RoutesComponent = () => {
  return (
    <Switch>
      {routes &&
        routes.map((item) => (
          <Route
            path={item.path}
            render={() => item.component}
            exact
            key={item.path}
            location={{ state: { name: item.name, icon: item.icon } }}
          />
        ))}
        { routes && routes.map((item) => (
           // <Route path={} render={} exact key={} location={}/>
           <Route
           path = {item.path} 
           render={() => item.component}
           exact
           key={item.path}
           location={{state: {name:item.name, icon:item.icon}}}
           />

        ))

        }
    </Switch>
  );
};
