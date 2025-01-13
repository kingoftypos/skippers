import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState,tagState, showState } from "./atoms";
function Search() {
  const [tags,setTags]=useRecoilState(tagState);
const [user,setUser]=useRecoilState(userState);
const[show,setShow]=useRecoilState(showState);
//console.log(user);
async function checkForCheated(user) {
  try {
    const res = await axios.get(`https://codeforces.com/api/user.status?handle=${user}`);

    if (res.data.result) {
      const skippedContests = res.data.result
        .filter((ele) => (ele.author.participantType === "OUT_OF_COMPETITION") && ele.verdict === "SKIPPED")
        .map((ele) => ele.contestId);

      const uniqueContests = [...new Set(skippedContests)];

      const val = await axios.get(`https://codeforces.com/api/contest.list?gym=false`);
      const contests = val.data.result;

      const contestNames = contests
        .filter((contest) => uniqueContests.includes(contest.id))
        .map((contest) => contest.name);

      setTags(contestNames);
      setShow(true);
    } else {
      console.log("No results found for this user.");
    }
  } catch (error) {
    console.log("Error fetching data: ", error.message);
  }
}


  return (
    <div className="w-full flex justify-center mt-12">
      <form className="max-w-md w-full space-y-4" >   
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="searchbtn"
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gradient-to-r from-[#414345] to-[#232526] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search CodeForces ID"
            required
          />
          <button
            type="submit" 
            onClick={(e)=>{
              e.preventDefault();
              checkForCheated(user);
            }}
            className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-[#182848] to-[#4b6cb7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
