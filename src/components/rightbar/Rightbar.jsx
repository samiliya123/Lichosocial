import { Users } from '../../dummyData'
import Online from '../online/Online'
import './rightbar.css'


export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
       <div className="birthdayContainer">
          <img src="/asset/person/gift (1).png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/asset/post/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => <Online key={u.id} user={u}/>)}
          </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
         <h4 className="rightbarTitle">User information</h4>
         <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Berlin</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
          <h4 className="rightbarFollowingInfo">User friends</h4>
          <div className="rightbarFollowings"> 
          <div className="rightbarFollowing">
            <img src="/asset/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/asset/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Nind</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/asset/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/asset/person/8.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/asset/person/9.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          </div>
         </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        
       </div>
      </div>
  )
}
