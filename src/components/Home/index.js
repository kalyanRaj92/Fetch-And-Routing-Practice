import UserInfo from '../UserInfo'

import BlogList from '../BlogList/index'

import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
