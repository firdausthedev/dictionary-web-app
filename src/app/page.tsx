import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";
import WordDataComponent from "@/components/WordData";
import ErrorMessageComponent from "@/components/ErrorMessage";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <Loading />
      <ErrorMessageComponent />
      <WordDataComponent />
    </main>
  );
}
