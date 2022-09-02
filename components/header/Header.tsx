/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import Link from 'next/link';
import { useAtom } from 'jotai';
import ProfilePicSVG from '../svgComps/ProfilePicSVG';
import DarkModeButton from './DarkModeButton';
import atoms from '../../util/atoms';
import AddNewPost from './AddNewPost';
import HeaderSearchWindow from './HeaderSearchWindow';
import useCheckUserName from '../../hooks/useCheckUserName';
import ExploreSVG from '../svgComps/ExploreSVG';
import NewPostSVG from '../svgComps/NewPostSVG';
import HeartHollow from '../svgComps/HeartHollow';
import IndexSVG from '../svgComps/IndexSVG';
import HomeSVG from '../svgComps/HomeSVG';
import SearchBtnSVG from '../svgComps/SearchBtnSVG';

function Header({ page }: { page: string }) {
  // eslint-disable-next-line no-unused-expressions
  const auth = getAuth();
  const [darkMode] = useAtom(atoms.darkMode);
  const [userDetails] = useAtom(atoms.userDetails);
  const [userNotifications] = useAtom(atoms.userNotifications);
  const [listeners] = useAtom(atoms.listeners);
  const [, setUserNotifications] = useAtom(atoms.userNotifications);
  const [, setUserDetails] = useAtom(atoms.userDetails);
  const [, setLoggingIn] = useAtom(atoms.loggingIn);
  const [, setHomePogePostsFetched] = useAtom(atoms.homePogePostsFetched);
  const [, setHomePagePosts] = useAtom(atoms.homePagePosts);
  const [, setStoriesArray] = useAtom(atoms.storiesArray);
  const [, setFollowingArray] = useAtom(atoms.followingArray);
  const [, setStories] = useAtom(atoms.stories);
  const [, setUserPosts] = useAtom(atoms.userPosts);

  const [avatarDropDown, setAvatarDropDown] = React.useState(false);
  const [addPost, setAddPost] = React.useState(false);
  const [nameSearch, setNameSearch] = React.useState('');
  const [searchWindow, setSearchWindow] = React.useState(false);

  const queryCharacter = true;

  const user = useCheckUserName({ nameSearch, queryCharacter });

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserNotifications({});
        setUserDetails({});
        setLoggingIn(false);
        setHomePogePostsFetched(false);
        setHomePagePosts({});
        setStoriesArray([]);
        setFollowingArray([]);
        setStories({});
        setUserPosts([]);

        // removes all firebase listener
        listeners.forEach((unsubscribe: any) => unsubscribe());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleTimeout() {
    setSearchWindow(false);
  }

  React.useEffect(() => {
    window.addEventListener('click', (e: any) => {
      // if outside of dropdown close dropdown
      if (e.target.id !== 'avatarDropDown') {
        setAvatarDropDown(false);
      }
    });
  }, []);

  return (
    <div className="sticky top-0 z-50 border-b border-stone-300 bg-white dark:border-stone-700 dark:bg-[#1c1c1c] dark:text-slate-100">
      <div className=" flex h-[60px] items-center justify-between px-[5px] sm:px-[20px] lg:justify-center ">
        <div className="flex h-[60px] w-[330px] min-w-[103px] items-center ">
          <Link href="/">
            <img
              src={darkMode ? '/instagramWhite.png' : '/instagramBlack.png'}
              alt="Instagram"
              className="cursor-pointer select-none"
            />
          </Link>
        </div>
        <div className="relative hidden sm:flex">
          <input
            className=" w-[200px] rounded-lg bg-[#efefef] py-[6px] pl-[45px] focus:outline-0 dark:bg-[#131313]  lg:w-[275px]"
            type="text"
            placeholder="Search"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            onFocus={() => setSearchWindow(true)}
            onBlur={() => {
              setTimeout(handleTimeout, 200);
            }}
          />
          {searchWindow ? (
            <HeaderSearchWindow
              loading={user.checkingUser}
              userDetails={user.queryNotificationsArray}
              searchName={nameSearch}
            />
          ) : (
            ''
          )}
          <div className="absolute left-[15px] top-[25%]">
            <SearchBtnSVG heightWidth="16" />
          </div>
        </div>
        <div className="relative flex items-center pl-[15px] lg:pl-[100px]">
          <Link href="/">
            <div>
              <HomeSVG page={page} />
            </div>
          </Link>
          <Link href="/Inbox">
            <div>
              <IndexSVG page={page} />
            </div>
          </Link>
          <button onClick={() => setAddPost(true)} type="button">
            <NewPostSVG />
          </button>
          <div className="ml-[10px] cursor-pointer sm:ml-[22px]">
            <HeartHollow />
          </div>
          {userNotifications?.messageCount === 0 ? (
            <div />
          ) : (
            <div className="absolute top-[-6px] left-[123px] flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-full bg-[#ff3041] text-[12px] sm:left-[147px] lg:left-[230px]">
              <p className="text-white">{userNotifications?.messageCount}</p>
            </div>
          )}
          <div className="ml-[10px] sm:ml-[22px]">
            <DarkModeButton />
          </div>

          <button
            className="relative ml-[10px] h-6 w-6 sm:ml-[22px]"
            type="button"
            onClick={() => setAvatarDropDown(!avatarDropDown)}
          >
            {userDetails.photoURL ? (
              <img
                id="avatarDropDown"
                src={userDetails.photoURL}
                alt="avatar"
                className="h-6 w-6 cursor-pointer select-none rounded-full bg-[#ebebeb] object-cover dark:bg-[#313131]"
              />
            ) : (
              <ProfilePicSVG height="24" width="24" strokeWidth="1.5" />
            )}
            <div
              className={`${
                avatarDropDown ? 'flex items-center justify-center' : 'hidden'
              } absolute top-6 right-1 z-[51] h-4 w-4 overflow-hidden`}
            >
              <div className="mt-5 h-4 w-4 rotate-45 bg-white dark:bg-[#131313]" />
            </div>
            <div
              className={`${
                avatarDropDown ? 'show' : 'hidden'
              } absolute right-[-20px] top-10 z-50 w-[230px] items-center justify-start bg-white text-sm shadow-[-2px_-2px_10px_2px_rgba(0,0,0,0.1)] dark:bg-[#131313] dark:shadow-[-2px_-2px_5px_2px_rgba(0,0,0,0.7)]`}
            >
              <Link href={`/${userDetails.displayName}`}>
                <div className="flex items-center py-2 px-4 hover:bg-[#f8f8f8] dark:hover:bg-[#080808]">
                  <ProfilePicSVG height="16" width="16" strokeWidth="2" />
                  <p className="pl-2">Profile</p>
                </div>
              </Link>
              <Link href="/Explore">
                <div className="flex items-center py-2 px-4 hover:bg-[#f8f8f8] dark:hover:bg-[#080808]">
                  <ExploreSVG />
                  <p className="pl-2">Explore</p>
                </div>
              </Link>
              <div
                className="border-t border-stone-300 py-2 px-4 text-start hover:bg-[#f8f8f8] dark:border-stone-700 dark:hover:bg-[#080808]"
                role="button"
                tabIndex={0}
                onClick={() => handleSignOut()}
              >
                Log out
              </div>
            </div>
          </button>
        </div>
      </div>
      {addPost ? <AddNewPost setAddPost={setAddPost} /> : <div />}
    </div>
  );
}

export default Header;