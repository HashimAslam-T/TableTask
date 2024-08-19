import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCell } from '../../redux/tableSlice';
import './TableRow.scss';

const TableRow = ({ row }) => {
  const dispatch = useDispatch();
  const [editField, setEditField] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleEditClick = (field) => {
    setEditField(field);
    setInputValue(row[field].toString()); 
  };

  const handleChange = (e) => {
    const { type, value, checked } = e.target;
    const newValue = type === 'checkbox' ? checked.toString() : value;
    setInputValue(newValue);
  };

  const handleSave = () => {
    if (editField !== null) {
      const value = editField === 'deliverableApproved' || editField === 'contentPublished'
        ? inputValue === 'true'
        : inputValue;

      dispatch(updateCell({ id: row.id, field: editField, value }));
      setEditField(null);
    }
  };

  const renderCellContent = (field) => {
    if (editField === field) {
      return (
        <div>
          {field === 'deliverableApproved' || field === 'contentPublished' ? (
            <select
              value={inputValue}
              onChange={handleChange}
              autoFocus
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          ) : (
            <input
              type={field === 'finalCreatorPrice' || field === 'finalBrandPrice' ? 'number' : 'text'}
              value={inputValue}
              onChange={handleChange}
              autoFocus
            />
          )}
          <button onClick={handleSave}>Save</button>
        </div>
      );
    }

    return field === 'deliverableApproved' || field === 'contentPublished' ? (
      row[field] ? 'Yes' : 'No'
    ) : (
      row[field]
    );
  };

  return (
    <tr>
      <td>
        {renderCellContent('deliverableId')}
        {editField !== 'deliverableId' && (
          <button className="edit-button" onClick={() => handleEditClick('deliverableId')}>Edit</button>
        )}
      </td>
      <td>
        {renderCellContent('deliverables')}
        {editField !== 'deliverables' && (
          <button className="edit-button" onClick={() => handleEditClick('deliverables')}>Edit</button>
        )}
      </td>
      <td>
        {renderCellContent('deliverableName')}
        {editField !== 'deliverableName' && (
          <button className="edit-button" onClick={() => handleEditClick('deliverableName')}>Edit</button>
        )}
      </td>
      <td>
        {renderCellContent('finalCreatorPrice')}
        {editField !== 'finalCreatorPrice' && (
          <button className="edit-button" onClick={() => handleEditClick('finalCreatorPrice')}>Edit</button>
        )}
      </td>
      <td>
        {renderCellContent('finalBrandPrice')}
        {editField !== 'finalBrandPrice' && (
          <button className="edit-button" onClick={() => handleEditClick('finalBrandPrice')}>Edit</button>
        )}
      </td>
      <td>
        {renderCellContent('deliverableApproved')}
        {editField !== 'deliverableApproved' && (
          <button className="edit-button" onClick={() => handleEditClick('deliverableApproved')}>Edit</button>
        )}
      </td>
      <td>
        {renderCellContent('contentPublished')}
        {editField !== 'contentPublished' && (
          <button className="edit-button" onClick={() => handleEditClick('contentPublished')}>Edit</button>
        )}
      </td>
      <td>
        {renderCellContent('postLink')}
        {editField !== 'postLink' && (
          <button className="edit-button" onClick={() => handleEditClick('postLink')}>Edit</button>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
