import Vacancies from "pages/Vacancies";
import Home from "pages/Home";
import Vacancy from "pages/Vacancy";
import Sign from "pages/Register";
import Apply from "pages/Apply";

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/vacancies', component: Vacancies },
  { path: '/vacancy/:id', component: Vacancy },
  { path: '/register', component: Sign }
]

export const privateRoutes = [
  { path: '/', component: Home },
  { path: '/vacancies', component: Vacancies },
  { path: '/vacancy/:id', component: Vacancy },
  { path: '/apply', component: Apply },
]