import allBlogPost from "./StaticPages/allBlogPost";
import PostBlog from "./StaticPages/PostBlog";
import PostJob from "./StaticPages/PostJob";
import allJobPost from "../StaticPages/allJobPost";
import { DefaultLayout }  from "./AdminComponent/DefaultLayout"


export default [
    {
      path: "/admin",
      exact: true,
      layout: DefaultLayout,
      component: () => <Redirect to="/admin" />
    },
    {
      path: "admin/overview",
      layout: DefaultLayout,
      component: 
    },
    {
      path: "/user-profile-lite",
      layout: DefaultLayout,
      component: UserProfileLite
    },
    {
      path: "/add-new-post",
      layout: DefaultLayout,
      component: AddNewPost
    },
    {
      path: "/errors",
      layout: DefaultLayout,
      component: Errors
    },
    {
      path: "/components-overview",
      layout: DefaultLayout,
      component: ComponentsOverview
    },
    {
      path: "/tables",
      layout: DefaultLayout,
      component: Tables
    },
    {
      path: "/blog-posts",
      layout: DefaultLayout,
      component: BlogPosts
    }
  ];