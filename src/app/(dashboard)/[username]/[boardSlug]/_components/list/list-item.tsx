import { FC, Suspense } from "react";
import { List } from "@prisma/client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardSkeleton from "@/app/(dashboard)/[username]/[boardSlug]/_components/card/card-skeleton";
import CardsArea from "@/app/(dashboard)/[username]/[boardSlug]/_components/list/cards-area";

interface ListItemProps {
  list: List;
}

const ListItem: FC<ListItemProps> = ({ list }) => {
  return (
    <Card className="flex h-full min-w-[300px] max-w-[300px] flex-col">
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-lg">{list.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-2">
        <Suspense fallback={<CardSkeleton />}>
          <CardsArea listId={list.id} />
        </Suspense>
      </CardContent>
      <CardFooter className="px-4 py-3">
        <p>Add card</p>
      </CardFooter>
    </Card>
  );
};

export default ListItem;