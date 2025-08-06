import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import gamerOne from "./assets/gamer-1.png";
import gamerTwo from "./assets/gamer-2.png";
import gamerTree from "./assets/gamer-3.png";
import { Trophy } from "lucide-react";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response?.data !== null) {
          setIsLoading(false);
          console.log("response?.data: ", response?.data);
          
          setUsers(response?.data);
        } else {
          setIsLoading(true);
        }
      } catch (error) {
        console.error("Failed to retrieve users:", error);
      }
    };
    fetchUsers();
  }, []);

  const gamers = users?.map(
    (user: { id: number; username: string; address: { zipcode: string } }) => {
      const points: number = +user.address.zipcode.slice(0, 3);
      return { id: user.id, username: user.username, points };
    }
  );

  const tournamentPrize: number[] = [50000, 25000, 10000];
  const tournamentPrizeOrdered: number[] = [
    tournamentPrize[1],
    tournamentPrize[0],
    tournamentPrize[2],
  ];
  const gamersSortedByPoints = gamers?.sort((a, b) => b.points - a.points);
  const topThreeGamers = gamersSortedByPoints?.slice(0, 3);
  const topThreeGamersOrdered = [
    topThreeGamers[1],
    topThreeGamers[0],
    topThreeGamers[2],
  ];

  const leaderboardAvatar: any = [
    { image: gamerOne, color: "yellow", place: "1st" },
    { image: gamerTwo, color: "silver", place: "2nd" },
    { image: gamerTree, color: "#CD7F32", place: "3rd" },
  ];
  const leaderboardOrdered: any = [
    leaderboardAvatar[1],
    leaderboardAvatar[0],
    leaderboardAvatar[2],
  ];

  console.log("isLoading: ", gamers);
  
  return (
    <section className="game-bg-6 py-8">
      {!isLoading ? (
        <div className="max-w-screen-xl flex flex-col mx-auto px-4 py-8">
          <h2 className="text-5xl font-bold text-white mb-20 text-center">
            Tournament Leaderboard
          </h2>
          <div className="flex justify-center mb-20">
            {topThreeGamersOrdered.filter(Boolean).map((topGamer, index) => {
              let prize: number;
              if (index === 0) {
                prize = tournamentPrizeOrdered[index];
              } else if (index === 1) {
                prize = tournamentPrizeOrdered[index];
              } else {
                prize =
                  tournamentPrizeOrdered[tournamentPrizeOrdered.length - 1];
              }

              return (
                <div className="p-4 border-2 border-white flex-row mx-8 rounded-4xl bg-white/15 hover:bg-green-500/24 hover:border-blue-700">
                  <img src={leaderboardOrdered[index].image} />
                  <div className="flex flex-col items-center mt-4">
                    <div
                      className="p-2 rounded-lg flex"
                      style={{ background: leaderboardOrdered[index].color }}
                    >
                      <p className="text-lg font-semibold mr-1">
                        {leaderboardOrdered[index].place}
                      </p>
                      <Trophy color="black" size={24} className="mb-2" />
                    </div>
                    <p className="text-lg font-bold text-white mb-2">
                      {topGamer?.username?.toUpperCase()}
                    </p>
                    <p className="text-sm font-bold text-yellow-300 mb-2">
                      {topGamer.points} points
                    </p>
                    <p className="text-2xl font-bold text-white mb-2">
                      R {prize}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Table className="w-[80%] mx-auto">
              <TableCaption>
                A list of your users participating in the tournament.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-white">Place</TableHead>
                  <TableHead className="text-white">Gamer tag</TableHead>
                  <TableHead className="text-white">Points</TableHead>
                  <TableHead className="text-right text-white">Prize</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gamersSortedByPoints?.map(
                  ({ id, username, points }, index) => {
                    let prize: number;
                    if (index === 0) {
                      prize = tournamentPrize[index];
                    } else if (index === 1) {
                      prize = tournamentPrize[index];
                    } else if (index === 2) {
                      prize = tournamentPrize[index];
                    } else {
                      prize = 1000;
                    }


                    return (
                      <TableRow key={`${username}-${id}`}>
                        <TableCell className="font-medium text-white p-2 hover:bg-amber-300">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-white p-2">
                          {username}
                        </TableCell>
                        <TableCell className="text-white p-2">
                          {points}
                        </TableCell>
                        <TableCell className="text-right text-white p-2">
                          R {prize}
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <p className="text-2xl">Loading...</p>
      )}
    </section>
  );
};

export default Leaderboard;
