import SectionHeading from "@/components/custom/SectionHeading";
import LoadingSpinner from "@/components/custom/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useBlockUserMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/redux/features/user/userManagementApi";
import { useState } from "react";
import { MdBlockFlipped } from "react-icons/md";

const ManageUsers = () => {
  const { data: response, isLoading } = useGetAllUsersQuery(undefined);
  const users = response?.data || [];
  const [deleteUser] = useDeleteUserMutation();
  const [blockUser] = useBlockUserMutation();

  console.log(users);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    deleteUser(id);
    setOpenDialog(false);
  };

  const handleBlock = (id: string) => {
    blockUser(id);
    setOpenDialog(false);
  };

  const openConfirmDialog = (id: string) => {
    setSelectedUserId(id);
    setOpenDialog(true);
  };

  const closeConfirmDialog = () => {
    setOpenDialog(false);
    setSelectedUserId(null);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <SectionHeading heading="Manage Users" />

      {/* Users Table */}
      <Table className="bg-white shadow-md rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
        <TableHeader >
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.isBlocked ? "Blocked" : "Active"}</TableCell>
                <TableCell className="space-x-2">
                  <Button onClick={() => openConfirmDialog(user._id)}>
                    <MdBlockFlipped />
                  </Button>
                </TableCell>
                {/* <TableCell>
                  <Button
                    className="text-rose-600 hover:bg-rose-600 hover:text-white"
                    onClick={() => openConfirmDialog(user._id)}
                  >
                    <MdDeleteOutline />
                  </Button>
                </TableCell> */}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>No users available.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Dialog for Confirming Block or Delete */}
      {selectedUserId && (
        <Dialog open={openDialog} onOpenChange={closeConfirmDialog}>
          <DialogTrigger asChild>
            <div></div>
          </DialogTrigger>
          <DialogContent className="max-w-lg p-6 bg-white rounded shadow-lg">
            <DialogHeader>
              <h3 className="text-lg font-medium">Are you sure?</h3>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                color="gray"
                onClick={closeConfirmDialog}
              >
                Cancel
              </Button>
              <Button color="red" onClick={() => handleDelete(selectedUserId)}>
                Delete
              </Button>
              <Button
                color="yellow"
                onClick={() => handleBlock(selectedUserId)}
              >
                Block
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ManageUsers;
