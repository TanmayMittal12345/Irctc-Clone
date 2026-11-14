const BASE = import.meta.env.VITE_API_URL || '';
const TOKEN_KEY = 'railease_token';

// ============= MOCK DATA (100+ TRAINS) =============
const MOCK_STATIONS = [
  { code: 'NDLS', name: 'New Delhi', city: 'Delhi' },
  { code: 'BCT', name: 'Mumbai Central', city: 'Mumbai' },
  { code: 'JP', name: 'Jaipur Junction', city: 'Jaipur' },
  { code: 'ADI', name: 'Ahmedabad Junction', city: 'Ahmedabad' },
  { code: 'HWH', name: 'Howrah Junction', city: 'Kolkata' },
  { code: 'MAS', name: 'Chennai Central', city: 'Chennai' },
  { code: 'SBC', name: 'KSR Bengaluru City', city: 'Bengaluru' },
  { code: 'HYB', name: 'Hyderabad Deccan', city: 'Hyderabad' },
  { code: 'KOTA', name: 'Kota Junction', city: 'Kota' },
  { code: 'BRC', name: 'Vadodara Junction', city: 'Vadodara' },
  { code: 'CNB', name: 'Kanpur Central', city: 'Kanpur' },
  { code: 'PUNE', name: 'Pune Junction', city: 'Pune' },
  { code: 'CDG', name: 'Chandigarh Junction', city: 'Chandigarh' },
  { code: 'LDH', name: 'Ludhiana Junction', city: 'Ludhiana' },
  { code: 'ASR', name: 'Amritsar Junction', city: 'Amritsar' },
  { code: 'BPL', name: 'Bhopal Junction', city: 'Bhopal' },
  { code: 'PNBE', name: 'Patna Junction', city: 'Patna' },
  { code: 'UMB', name: 'Ambala Cantt', city: 'Ambala' },
];

const MOCK_TRAINS = [
  // Delhi to Mumbai
  { num: '90001', name: 'Gateway Rajdhani', from: 'NDLS', to: 'BCT', dept: '16:30', arrv: '08:20', dur: 1270, dist: 1384, classes: { '1A': 5500, '2A': 3500, '3A': 2500 } },
  { num: '90002', name: 'Gateway Rajdhani Return', from: 'BCT', to: 'NDLS', dept: '17:00', arrv: '08:20', dur: 1270, dist: 1384, classes: { '1A': 5500, '2A': 3500, '3A': 2500 } },
  { num: '90003', name: 'Western Rajdhani', from: 'NDLS', to: 'BCT', dept: '14:45', arrv: '06:00', dur: 1270, dist: 1384, classes: { '3A': 2500, '2A': 3500 } },
  { num: '90004', name: 'Mumbai Express Morning', from: 'NDLS', to: 'BCT', dept: '06:00', arrv: '15:30', dur: 570, dist: 1384, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90005', name: 'Mumbai Express Evening', from: 'NDLS', to: 'BCT', dept: '21:00', arrv: '09:30', dur: 780, dist: 1384, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90006', name: 'Mumbai Fast 1', from: 'NDLS', to: 'BCT', dept: '18:00', arrv: '07:00', dur: 780, dist: 1384, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90007', name: 'Mumbai Fast 2', from: 'NDLS', to: 'BCT', dept: '22:00', arrv: '10:00', dur: 720, dist: 1384, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90008', name: 'Delhi to Mumbai 1', from: 'NDLS', to: 'BCT', dept: '07:00', arrv: '16:00', dur: 540, dist: 1384, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90009', name: 'Delhi to Mumbai 2', from: 'NDLS', to: 'BCT', dept: '12:00', arrv: '21:00', dur: 540, dist: 1384, classes: { '3A': 2500, '2A': 3500 } },
  { num: '90010', name: 'Rajdhani Premium', from: 'BCT', to: 'NDLS', dept: '15:00', arrv: '06:00', dur: 900, dist: 1384, classes: { '1A': 5500, '2A': 3500 } },

  // Delhi to Jaipur
  { num: '90011', name: 'Shivalik Shatabdi', from: 'NDLS', to: 'JP', dept: '07:40', arrv: '11:45', dur: 245, dist: 300, classes: { 'CC': 2200, '2A': 3500 } },
  { num: '90012', name: 'Jaipur Express 1', from: 'NDLS', to: 'JP', dept: '09:30', arrv: '13:15', dur: 225, dist: 300, classes: { 'CC': 2200 } },
  { num: '90013', name: 'Jaipur Express 2', from: 'NDLS', to: 'JP', dept: '14:00', arrv: '18:00', dur: 240, dist: 300, classes: { 'CC': 2200, '2S': 600 } },
  { num: '90014', name: 'Jaipur Express 3', from: 'NDLS', to: 'JP', dept: '18:30', arrv: '22:30', dur: 240, dist: 300, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90015', name: 'Jaipur Return 1', from: 'JP', to: 'NDLS', dept: '08:00', arrv: '12:00', dur: 240, dist: 300, classes: { 'CC': 2200 } },
  { num: '90016', name: 'Jaipur Return 2', from: 'JP', to: 'NDLS', dept: '15:00', arrv: '19:00', dur: 240, dist: 300, classes: { 'CC': 2200, '3A': 2500 } },
  { num: '90017', name: 'Jaipur Return 3', from: 'JP', to: 'NDLS', dept: '20:00', arrv: '00:00', dur: 240, dist: 300, classes: { 'SL': 1200, '2A': 3500 } },

  // Delhi to Ahmedabad
  { num: '90018', name: 'Gujarat Sampark', from: 'NDLS', to: 'ADI', dept: '19:40', arrv: '08:30', dur: 700, dist: 880, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90019', name: 'Ahmedabad Express 1', from: 'NDLS', to: 'ADI', dept: '11:30', arrv: '21:00', dur: 570, dist: 880, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90020', name: 'Ahmedabad Express 2', from: 'NDLS', to: 'ADI', dept: '14:30', arrv: '00:30', dur: 600, dist: 880, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90021', name: 'Ahmedabad Return 1', from: 'ADI', to: 'NDLS', dept: '07:00', arrv: '16:30', dur: 570, dist: 880, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90022', name: 'Ahmedabad Return 2', from: 'ADI', to: 'NDLS', dept: '22:00', arrv: '07:30', dur: 570, dist: 880, classes: { 'SL': 1200, '2A': 3500 } },

  // Delhi to Kolkata
  { num: '90023', name: 'Howrah Mail', from: 'NDLS', to: 'HWH', dept: '17:05', arrv: '10:10', dur: 1365, dist: 1450, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90024', name: 'Eastern Rajdhani', from: 'NDLS', to: 'HWH', dept: '16:00', arrv: '09:30', dur: 1350, dist: 1450, classes: { '3A': 2500, '2A': 3500, '1A': 5500 } },
  { num: '90025', name: 'Kolkata Express 1', from: 'NDLS', to: 'HWH', dept: '20:15', arrv: '10:00', dur: 900, dist: 1450, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90026', name: 'Kolkata Express 2', from: 'NDLS', to: 'HWH', dept: '15:45', arrv: '11:30', dur: 900, dist: 1450, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90027', name: 'Delhi Mail Return', from: 'HWH', to: 'NDLS', dept: '19:40', arrv: '12:55', dur: 1365, dist: 1450, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90028', name: 'Howrah Return Fast', from: 'HWH', to: 'NDLS', dept: '14:00', arrv: '06:00', dur: 900, dist: 1450, classes: { 'SL': 1200, '3A': 2500 } },

  // Delhi to Chennai
  { num: '90029', name: 'Chennai Express', from: 'NDLS', to: 'MAS', dept: '11:00', arrv: '12:00', dur: 3000, dist: 2200, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90030', name: 'Southern Link', from: 'NDLS', to: 'MAS', dept: '15:30', arrv: '14:00', dur: 3060, dist: 2200, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90031', name: 'Chennai Return 1', from: 'MAS', to: 'NDLS', dept: '18:30', arrv: '19:00', dur: 3000, dist: 2200, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90032', name: 'Chennai Return 2', from: 'MAS', to: 'NDLS', dept: '22:00', arrv: '22:00', dur: 3060, dist: 2200, classes: { 'SL': 1200, '2A': 3500 } },

  // Delhi to Bangalore
  { num: '90033', name: 'Bangalore Rajdhani', from: 'NDLS', to: 'SBC', dept: '12:30', arrv: '08:30', dur: 2400, dist: 2150, classes: { '3A': 2500, '2A': 3500, '1A': 5500 } },
  { num: '90034', name: 'Bangalore Express 1', from: 'NDLS', to: 'SBC', dept: '09:00', arrv: '16:00', dur: 2100, dist: 2150, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90035', name: 'Bangalore Express 2', from: 'NDLS', to: 'SBC', dept: '19:00', arrv: '02:00', dur: 2100, dist: 2150, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90036', name: 'Bangalore Return 1', from: 'SBC', to: 'NDLS', dept: '06:30', arrv: '15:00', dur: 2100, dist: 2150, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90037', name: 'Bangalore Return 2', from: 'SBC', to: 'NDLS', dept: '20:00', arrv: '04:00', dur: 2100, dist: 2150, classes: { 'SL': 1200, '2A': 3500 } },

  // Delhi to Hyderabad
  { num: '90038', name: 'Hyderabad Express 1', from: 'NDLS', to: 'HYB', dept: '17:30', arrv: '08:30', dur: 1260, dist: 1550, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90039', name: 'Hyderabad Express 2', from: 'NDLS', to: 'HYB', dept: '14:00', arrv: '06:00', dur: 1200, dist: 1550, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90040', name: 'Hyderabad Express 3', from: 'NDLS', to: 'HYB', dept: '20:00', arrv: '11:30', dur: 1260, dist: 1550, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90041', name: 'Hyderabad Return 1', from: 'HYB', to: 'NDLS', dept: '15:00', arrv: '06:00', dur: 1260, dist: 1550, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90042', name: 'Hyderabad Return 2', from: 'HYB', to: 'NDLS', dept: '22:00', arrv: '14:00', dur: 1260, dist: 1550, classes: { 'SL': 1200, '2A': 3500 } },

  // Mumbai to Bangalore
  { num: '90043', name: 'Mumbai Bangalore Link', from: 'BCT', to: 'SBC', dept: '18:00', arrv: '15:30', dur: 1770, dist: 1050, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90044', name: 'Karnataka Express', from: 'BCT', to: 'SBC', dept: '20:30', arrv: '14:45', dur: 1200, dist: 1050, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90045', name: 'Bangalore Return Fast', from: 'SBC', to: 'BCT', dept: '06:00', arrv: '14:30', dur: 1200, dist: 1050, classes: { 'SL': 1200, '3A': 2500 } },

  // Mumbai to Hyderabad
  { num: '90046', name: 'Deccan Link', from: 'BCT', to: 'HYB', dept: '14:10', arrv: '05:30', dur: 900, dist: 710, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90047', name: 'Deccan Express 2', from: 'BCT', to: 'HYB', dept: '18:00', arrv: '09:00', dur: 900, dist: 710, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90048', name: 'Hyderabad Link Return', from: 'HYB', to: 'BCT', dept: '17:00', arrv: '08:00', dur: 900, dist: 710, classes: { 'SL': 1200, '3A': 2500 } },

  // Mumbai to Chennai
  { num: '90049', name: 'Chennai Link 1', from: 'BCT', to: 'MAS', dept: '14:00', arrv: '18:30', dur: 1080, dist: 1050, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90050', name: 'Chennai Link 2', from: 'BCT', to: 'MAS', dept: '22:00', arrv: '02:30', dur: 1080, dist: 1050, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90051', name: 'Chennai Return Link', from: 'MAS', to: 'BCT', dept: '20:00', arrv: '00:30', dur: 1080, dist: 1050, classes: { 'SL': 1200, '3A': 2500 } },

  // Mumbai to Pune
  { num: '90052', name: 'Pune Express 1', from: 'BCT', to: 'PUNE', dept: '06:00', arrv: '10:00', dur: 240, dist: 192, classes: { 'SL': 1200, '3A': 2500, 'CC': 2200 } },
  { num: '90053', name: 'Pune Express 2', from: 'BCT', to: 'PUNE', dept: '12:00', arrv: '16:00', dur: 240, dist: 192, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90054', name: 'Pune Express 3', from: 'BCT', to: 'PUNE', dept: '18:00', arrv: '22:00', dur: 240, dist: 192, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90055', name: 'Pune Return 1', from: 'PUNE', to: 'BCT', dept: '08:00', arrv: '12:00', dur: 240, dist: 192, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90056', name: 'Pune Return 2', from: 'PUNE', to: 'BCT', dept: '14:00', arrv: '18:00', dur: 240, dist: 192, classes: { 'SL': 1200, '2A': 3500 } },

  // Bangalore to Chennai
  { num: '90057', name: 'Chennai Link Fast', from: 'SBC', to: 'MAS', dept: '06:00', arrv: '11:00', dur: 300, dist: 360, classes: { 'CC': 2200, '2S': 600, 'SL': 1200 } },
  { num: '90058', name: 'Chennai Link Slow', from: 'SBC', to: 'MAS', dept: '18:00', arrv: '23:30', dur: 330, dist: 360, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90059', name: 'Chennai Return Link', from: 'MAS', to: 'SBC', dept: '14:00', arrv: '19:00', dur: 300, dist: 360, classes: { 'CC': 2200, 'SL': 1200 } },

  // Hyderabad to Chennai
  { num: '90060', name: 'Chennai Express Via HYB', from: 'HYB', to: 'MAS', dept: '14:00', arrv: '21:30', dur: 450, dist: 700, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90061', name: 'Chennai Fast Return', from: 'MAS', to: 'HYB', dept: '18:30', arrv: '02:00', dur: 450, dist: 700, classes: { 'SL': 1200, '2A': 3500 } },

  // North Routes (Punjab)
  { num: '90062', name: 'Punjab Superfast', from: 'NDLS', to: 'ADI', dept: '21:15', arrv: '08:30', dur: 700, dist: 450, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90063', name: 'Amritsar Express', from: 'NDLS', to: 'ASR', dept: '19:30', arrv: '04:00', dur: 520, dist: 450, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90064', name: 'Ludhiana Express', from: 'NDLS', to: 'LDH', dept: '21:00', arrv: '03:30', dur: 390, dist: 310, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90065', name: 'Chandigarh Express', from: 'NDLS', to: 'CDG', dept: '07:00', arrv: '10:30', dur: 210, dist: 240, classes: { 'CC': 2200, 'SL': 1200 } },

  // Additional variety routes
  { num: '90066', name: 'Kota Express 1', from: 'NDLS', to: 'KOTA', dept: '18:00', arrv: '02:20', dur: 520, dist: 465, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90067', name: 'Kota Express 2', from: 'KOTA', to: 'NDLS', dept: '22:30', arrv: '06:50', dur: 520, dist: 465, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90068', name: 'Vadodara Express', from: 'NDLS', to: 'BRC', dept: '16:40', arrv: '04:10', dur: 650, dist: 920, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90069', name: 'Bhopal Express 1', from: 'NDLS', to: 'BPL', dept: '18:00', arrv: '23:00', dur: 300, dist: 930, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90070', name: 'Bhopal Express 2', from: 'BPL', to: 'NDLS', dept: '01:30', arrv: '09:15', dur: 465, dist: 930, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90071', name: 'Kanpur Express', from: 'NDLS', to: 'CNB', dept: '22:00', arrv: '02:50', dur: 290, dist: 440, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90072', name: 'Kanpur Return', from: 'CNB', to: 'NDLS', dept: '07:15', arrv: '12:55', dur: 340, dist: 440, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90073', name: 'Patna Express 1', from: 'NDLS', to: 'PNBE', dept: '15:45', arrv: '05:15', dur: 570, dist: 1000, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90074', name: 'Patna Express 2', from: 'PNBE', to: 'NDLS', dept: '06:00', arrv: '22:45', dur: 1010, dist: 1000, classes: { 'SL': 1200, '2A': 3500 } },

  // Cross country routes (30+ more)
  { num: '90075', name: 'Cross Link 1', from: 'JP', to: 'BRC', dept: '09:00', arrv: '15:30', dur: 390, dist: 380, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90076', name: 'Cross Link 2', from: 'BRC', to: 'ADI', dept: '10:00', arrv: '13:15', dur: 195, dist: 176, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90077', name: 'Cross Link 3', from: 'KOTA', to: 'JP', dept: '11:00', arrv: '15:45', dur: 285, dist: 300, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90078', name: 'Cross Link 4', from: 'CNB', to: 'PNBE', dur: 420, dist: 560, dept: '12:00', arrv: '19:00', classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90079', name: 'Cross Link 5', from: 'BPL', to: 'HYB', dept: '08:00', arrv: '17:30', dur: 570, dist: 600, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90080', name: 'Cross Link 6', from: 'PUNE', to: 'BPL', dept: '16:00', arrv: '07:00', dur: 900, dist: 750, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90081', name: 'Cross Link 7', from: 'HYB', to: 'SBC', dept: '13:00', arrv: '21:30', dur: 510, dist: 560, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90082', name: 'Cross Link 8', from: 'SBC', to: 'HYB', dept: '07:00', arrv: '15:30', dur: 510, dist: 560, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90083', name: 'Cross Link 9', from: 'MAS', to: 'HYB', dept: '18:30', arrv: '02:00', dur: 450, dist: 700, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90084', name: 'Cross Link 10', from: 'NDLS', to: 'UMB', dept: '10:00', arrv: '13:00', dur: 180, dist: 200, classes: { 'CC': 2200, 'SL': 1200 } },

  // Additional variety (20+ more for 100+ total)
  { num: '90085', name: 'Premium Link 1', from: 'NDLS', to: 'BCT', dept: '08:00', arrv: '17:00', dur: 540, dist: 1384, classes: { '1A': 5500, '2A': 3500 } },
  { num: '90086', name: 'Premium Link 2', from: 'BCT', to: 'SBC', dept: '19:00', arrv: '16:00', dur: 1020, dist: 1050, classes: { '2A': 3500, '3A': 2500 } },
  { num: '90087', name: 'Budget Express 1', from: 'NDLS', to: 'JP', dept: '10:30', arrv: '14:30', dur: 240, dist: 300, classes: { '2S': 600, 'SL': 1200 } },
  { num: '90088', name: 'Budget Express 2', from: 'NDLS', to: 'KOTA', dept: '14:00', arrv: '20:20', dur: 380, dist: 465, classes: { '2S': 600, 'SL': 1200 } },
  { num: '90089', name: 'Rajdhani Alt', from: 'NDLS', to: 'HWH', dept: '18:00', arrv: '10:30', dur: 1020, dist: 1450, classes: { '1A': 5500, '2A': 3500, '3A': 2500 } },
  { num: '90090', name: 'Super Fast 1', from: 'NDLS', to: 'ADI', dept: '12:00', arrv: '22:00', dur: 600, dist: 880, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
  { num: '90091', name: 'Super Fast 2', from: 'BCT', to: 'HYB', dept: '20:00', arrv: '11:30', dur: 900, dist: 710, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90092', name: 'Local Link 1', from: 'JP', to: 'ADI', dept: '08:00', arrv: '14:00', dur: 360, dist: 400, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90093', name: 'Local Link 2', from: 'ADI', to: 'BRC', dept: '09:00', arrv: '11:30', dur: 150, dist: 176, classes: { 'SL': 1200, 'CC': 2200 } },
  { num: '90094', name: 'Local Link 3', from: 'BCT', to: 'PUNE', dept: '08:00', arrv: '12:00', dur: 240, dist: 192, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90095', name: 'Overnight 1', from: 'NDLS', to: 'MAS', dept: '20:00', arrv: '20:00', dur: 2880, dist: 2200, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90096', name: 'Overnight 2', from: 'BCT', to: 'SBC', dept: '21:00', arrv: '16:00', dur: 1140, dist: 1050, classes: { 'SL': 1200, '2A': 3500 } },
  { num: '90097', name: 'Day Express 1', from: 'NDLS', to: 'HYB', dept: '06:00', arrv: '18:00', dur: 720, dist: 1550, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90098', name: 'Day Express 2', from: 'NDLS', to: 'SBC', dept: '07:00', arrv: '17:00', dur: 600, dist: 2150, classes: { 'SL': 1200, '3A': 2500 } },
  { num: '90099', name: 'Premium Express', from: 'NDLS', to: 'PUNE', dept: '10:00', arrv: '20:00', dur: 600, dist: 1260, classes: { '2A': 3500, '1A': 5500 } },
  { num: '90100', name: 'Century Train', from: 'NDLS', to: 'BCT', dept: '23:59', arrv: '08:00', dur: 481, dist: 1384, classes: { 'SL': 1200, '3A': 2500, '2A': 3500 } },
];

function mockSearch(from, to, date) {
  let trains = MOCK_TRAINS.filter(t => t.from === from && t.to === to);
  
  // Generate deterministic availability based on trainId + date
  const getAvailability = (trainId, classCode) => {
    const seed = parseInt(trainId) + parseInt(date.replace(/-/g, ''));
    const charCode = classCode.charCodeAt(0) + classCode.charCodeAt(classCode.length - 1);
    const availability = ((seed * charCode) % 40) + 10; // 10-50 seats
    return availability;
  };
  
  return {
    from: MOCK_STATIONS.find(s => s.code === from),
    to: MOCK_STATIONS.find(s => s.code === to),
    count: trains.length,
    trains: trains.map(t => ({
      scheduleId: `${t.num}-${date}`,
      trainId: t.num,
      number: t.num,
      name: t.name,
      type: 'TRAIN',
      bookable: true,
      from: { code: t.from, departureAt: `${date}T${t.dept}:00` },
      to: { code: t.to, arrivalAt: `${date}T${t.arrv}:00` },
      durationMinutes: t.dur,
      distanceKm: t.dist,
      classes: Object.entries(t.classes).map(([code, fare]) => ({
        code,
        fare,
        available: getAvailability(t.num, code),
      })),
    })),
  };
}

// Mock functions for endpoints
function mockStations(q = '') {
  const filtered = MOCK_STATIONS.filter(s => 
    !q || s.name.toLowerCase().includes(q.toLowerCase()) || s.code.toLowerCase().includes(q.toLowerCase()) || s.city.toLowerCase().includes(q.toLowerCase())
  );
  return Promise.resolve({ stations: filtered });
}

function mockSearch2(p) {
  const { from, to, date, class: classCode, sort, departAfter, departBefore } = p;
  if (!from || !to || !date) return Promise.reject(new ApiError(400, 'INVALID', 'Missing from, to, or date'));
  
  // Get deterministic availability
  const getAvailability = (trainId, code) => {
    const seed = parseInt(trainId) + parseInt(date.replace(/-/g, ''));
    const charCode = code.charCodeAt(0) + code.charCodeAt(code.length - 1);
    return ((seed * charCode) % 40) + 10;
  };
  
  let trains = MOCK_TRAINS.filter(t => t.from === from && t.to === to);
  
  // Filter by class if specified (only show trains that have this class available)
  if (classCode) {
    trains = trains.filter(t => t.classes[classCode]);
  }
  
  // Filter by departure time window if specified
  if (departAfter || departBefore) {
    trains = trains.filter(t => {
      if (departAfter && t.dept < departAfter) return false;
      if (departBefore && t.dept > departBefore) return false;
      return true;
    });
  }
  
  // Map to train objects with filtered classes
  let results = trains.map(t => ({
    scheduleId: `${t.num}-${date}`,
    trainId: t.num,
    number: t.num,
    name: t.name,
    type: 'TRAIN',
    bookable: true,
    from: { code: t.from, departureAt: `${date}T${t.dept}:00` },
    to: { code: t.to, arrivalAt: `${date}T${t.arrv}:00` },
    durationMinutes: t.dur,
    distanceKm: t.dist,
    classes: Object.entries(t.classes).map(([code, fare]) => ({
      code,
      fare,
      available: getAvailability(t.num, code),
    })),
  }));
  
  // If class filter is active, filter to only show that class
  if (classCode) {
    results = results.filter(t => t.classes.some(c => c.code === classCode && c.available > 0));
  }
  
  // Apply sorting
  if (sort === 'duration') {
    results.sort((a, b) => a.durationMinutes - b.durationMinutes);
  } else if (sort === 'price') {
    results.sort((a, b) => {
      const priceA = Math.min(...a.classes.map(c => c.fare));
      const priceB = Math.min(...b.classes.map(c => c.fare));
      return priceA - priceB;
    });
  } else {
    // Default: sort by departure time
    results.sort((a, b) => a.from.departureAt.localeCompare(b.from.departureAt));
  }
  
  return Promise.resolve({
    from: MOCK_STATIONS.find(s => s.code === from),
    to: MOCK_STATIONS.find(s => s.code === to),
    count: results.length,
    trains: results,
  });
}

function mockLogin(b) {
  if (!b || !b.email) return Promise.reject(new ApiError(400, 'INVALID', 'Email required'));
  const mockUser = { id: 'mock-user-' + Date.now(), name: b.email.split('@')[0], email: b.email, phone: '9999999999' };
  const mockToken = 'mock-token-' + Date.now();
  return Promise.resolve({ token: mockToken, user: mockUser });
}

function mockRegister(b) {
  if (!b || !b.email || !b.name) return Promise.reject(new ApiError(400, 'INVALID', 'Email and name required'));
  const mockUser = { id: 'mock-user-' + Date.now(), name: b.name, email: b.email, phone: b.phone || '9999999999' };
  const mockToken = 'mock-token-' + Date.now();
  return Promise.resolve({ token: mockToken, user: mockUser });
}

function mockMe() {
  const mockUser = { id: 'mock-user-123', name: 'Demo User', email: 'user@example.com', phone: '9999999999' };
  return Promise.resolve({ user: mockUser });
}

function mockTrain(trainId, params) {
  const { from, to, date } = params;
  if (!from || !to || !date) return Promise.reject(new ApiError(400, 'INVALID', 'Missing from, to, or date'));
  
  // Find the train in mock data
  const train = MOCK_TRAINS.find(t => t.num === trainId);
  if (!train) return Promise.reject(new ApiError(404, 'TRAIN_NOT_FOUND', 'Train not found'));
  
  // Check if this train goes from 'from' to 'to'
  if (train.from !== from || train.to !== to) {
    return Promise.reject(new ApiError(404, 'NO_SERVICE', 'Train does not serve this route'));
  }
  
  // Generate deterministic availability based on trainId + date (so it stays consistent)
  const seed = parseInt(trainId) + parseInt(date.replace(/-/g, ''));
  const getAvailability = (classCode) => {
    // Use seed to generate consistent but different numbers for each class
    const charCode = classCode.charCodeAt(0) + classCode.charCodeAt(classCode.length - 1);
    const availability = ((seed * charCode) % 40) + 10; // 10-50 seats
    return availability;
  };
  
  // Build the journey object
  const journey = {
    scheduleId: `${train.num}-${date}`,
    runDate: date,
    from,
    to,
    distanceKm: train.dist,
    departureAt: `${date}T${train.dept}:00`,
    arrivalAt: `${date}T${train.arrv}:00`,
    durationMinutes: train.dur,
    bookable: true,
    classes: Object.entries(train.classes).map(([code, fare]) => ({
      code,
      available: getAvailability(code),
      totalSeats: 100,
      fare: {
        perPassenger: fare,
        base: fare * 0.8,
        reservationCharge: 50,
        gst: fare * 0.15,
        total: fare
      }
    }))
  };
  
  return Promise.resolve({
    train: {
      _id: train.num,
      number: train.num,
      name: train.name,
      type: 'TRAIN',
      classes: Object.keys(train.classes).map(code => ({ code, capacity: 100 }))
    },
    route: [
      { stationCode: from, arrivalTime: null, departureTime: train.dept, distanceKm: 0, dayOffset: 0 },
      { stationCode: to, arrivalTime: train.arrv, departureTime: null, distanceKm: train.dist, dayOffset: 0 }
    ],
    runningDays: [0, 1, 2, 3, 4, 5, 6],
    journey
  });
}

function mockCreateBooking(body) {
  if (!body || !body.scheduleId || !body.passengers || body.passengers.length === 0) {
    return Promise.reject(new ApiError(400, 'INVALID', 'Missing required booking fields'));
  }
  
  // Generate mock booking
  const bookingId = 'BK' + Date.now();
  const pnr = Math.random().toString().slice(2, 12).padEnd(10, '0');
  
  const booking = {
    id: bookingId,
    _id: bookingId,
    pnr,
    scheduleId: body.scheduleId,
    from: { code: body.from, name: MOCK_STATIONS.find(s => s.code === body.from)?.name || body.from },
    to: { code: body.to, name: MOCK_STATIONS.find(s => s.code === body.to)?.name || body.to },
    journeyDate: body.date,
    departureAt: `${body.date}T09:00:00`,
    date: body.date,
    classCode: body.classCode,
    status: 'PENDING_PAYMENT',
    train: {
      _id: body.scheduleId.split('-')[0],
      number: body.scheduleId.split('-')[0],
      name: 'Mock Train ' + body.scheduleId.split('-')[0]
    },
    passengers: body.passengers.map((p, i) => ({
      name: p.name,
      age: p.age,
      gender: p.gender,
      coach: String.fromCharCode(65 + Math.floor(i / 10)) + (Math.floor(i / 10) + 1), // e.g., 'A1', 'B2'
      seat: (i % 10) + 1 // Seat 1-10
    })),
    fare: {
      perPassenger: 3500,
      base: 2800,
      reservationCharge: 50,
      gst: 525,
      total: 3500 * body.passengers.length
    },
    holdExpiresAt: new Date(Date.now() + 3 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString()
  };
  
  return Promise.resolve({ booking });
}

function mockPaymentInitiate(bookingId) {
  const paymentId = 'PAY' + Date.now();
  return Promise.resolve({
    payment: {
      _id: paymentId,
      booking: bookingId,
      amount: 3500,
      status: 'PENDING',
      expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString()
    }
  });
}

function mockPaymentConfirm(paymentId, outcome) {
  if (outcome !== 'SUCCESS' && outcome !== 'FAILED') {
    return Promise.reject(new ApiError(400, 'INVALID', 'Invalid payment outcome'));
  }
  
  return Promise.resolve({
    payment: {
      _id: paymentId,
      status: outcome === 'SUCCESS' ? 'COMPLETED' : 'FAILED',
      outcome
    },
    booking: {
      status: outcome === 'SUCCESS' ? 'CONFIRMED' : 'PAYMENT_FAILED'
    }
  });
}

function mockGetBooking(bookingId) {
  // Return a mock booking (in real app, this would be fetched from DB)
  const booking = {
    id: bookingId,
    _id: bookingId,
    pnr: Math.random().toString().slice(2, 12).padEnd(10, '0'),
    scheduleId: 'SCH-001',
    from: { code: 'NDLS', name: 'New Delhi' },
    to: { code: 'BCT', name: 'Mumbai Central' },
    journeyDate: '2026-10-31',
    departureAt: '2026-10-31T16:30:00',
    classCode: '2A',
    status: 'PENDING_PAYMENT',
    train: {
      _id: '90001',
      number: '90001',
      name: 'Gateway Rajdhani'
    },
    passengers: [
      { name: 'Sumit Sinha', age: 20, gender: 'M', coach: 'A1', seat: 1 }
    ],
    fare: {
      perPassenger: 3500,
      base: 2800,
      reservationCharge: 50,
      gst: 525,
      total: 3500
    },
    holdExpiresAt: new Date(Date.now() + 3 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString()
  };
  
  return Promise.resolve({ booking });
}

function mockGetBookings(params = {}) {
  // Return empty list of bookings (user hasn't made any yet in this session)
  return Promise.resolve({ bookings: [] });
}

function mockGetPnrStatus(pnr) {
  // Return a mock booking by PNR (for PNR status check)
  const booking = {
    pnr: pnr,
    status: 'CONFIRMED',
    train: {
      _id: '90001',
      number: '90001',
      name: 'Gateway Rajdhani'
    },
    from: { code: 'NDLS', name: 'New Delhi' },
    to: { code: 'BCT', name: 'Mumbai Central' },
    journeyDate: '2026-10-31',
    departureAt: '2026-10-31T16:30:00',
    classCode: '2A',
    passengers: [
      { 
        index: 1,
        name: 'S****** Sinha', 
        age: '**',
        status: 'CONFIRMED',
        coach: 'A1', 
        seat: 1 
      }
    ]
  };
  
  return Promise.resolve({ booking });
}

// Generate a mock PDF ticket as a data URL
function generateMockPDF(booking, pnr) {
  const canv = document.createElement('canvas');
  canv.width = 800;
  canv.height = 600;
  const ctx = canv.getContext('2d');
  
  // White background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 800, 600);
  
  // Border
  ctx.strokeStyle = '#003d7a';
  ctx.lineWidth = 3;
  ctx.strokeRect(10, 10, 780, 580);
  
  // Header
  ctx.fillStyle = '#003d7a';
  ctx.font = 'bold 32px Arial';
  ctx.fillText('RAILEASE E-TICKET', 50, 60);
  
  ctx.fillStyle = '#666';
  ctx.font = '14px Arial';
  ctx.fillText('Booking Reference: ' + pnr, 50, 90);
  ctx.fillText('Generated: ' + new Date().toLocaleString(), 50, 110);
  
  // Ticket details
  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Journey Details', 50, 150);
  
  ctx.font = '13px Arial';
  let y = 180;
  ctx.fillText('Train: ' + (booking.train?.name || 'Mock Train'), 50, y);
  y += 25;
  ctx.fillText('Route: ' + (booking.from?.name || 'Delhi') + ' → ' + (booking.to?.name || 'Mumbai'), 50, y);
  y += 25;
  ctx.fillText('Date: ' + (booking.journeyDate || '2026-10-31'), 50, y);
  y += 25;
  ctx.fillText('Class: ' + (booking.classCode || '2A'), 50, y);
  y += 25;
  
  // Passengers
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Passengers', 50, y + 10);
  y += 40;
  ctx.font = '13px Arial';
  
  if (booking.passengers && booking.passengers.length > 0) {
    booking.passengers.forEach((p, i) => {
      ctx.fillText((i + 1) + '. ' + (p.name || 'Passenger ' + (i + 1)) + ' - Seat ' + (p.coach || 'A1') + (p.seat || '1'), 70, y);
      y += 25;
      if (y > 500) return;
    });
  }
  
  // Fare
  y = 500;
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Fare Details', 50, y);
  y += 30;
  ctx.font = '13px Arial';
  ctx.fillText('Total Amount: ₹' + (booking.fare?.total || '3500'), 50, y);
  
  // Footer
  ctx.fillStyle = '#666';
  ctx.font = '11px Arial';
  ctx.fillText('This is a mock e-ticket for demonstration purposes only.', 50, 570);
  
  return canv.toDataURL('image/png');
}

async function mockDownloadTicket(bookingId, pnr) {
  // Fetch booking to get details
  try {
    const { booking } = await mockGetBooking(bookingId);
    
    // Import required libraries
    const { jsPDF } = await import('jspdf');
    const QRCode = (await import('qrcode')).default;
    
    const doc = new jsPDF();
    
    // Colors
    const primaryColor = [0, 61, 122];
    const darkText = [20, 20, 20];
    
    // Header background
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 40, 'F');
    
    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('RAILEASE E-TICKET', 15, 25);
    
    // PNR and date
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`PNR: ${pnr}`, 15, 35);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 120, 35);
    
    // Generate QR code containing PNR and booking ID
    const qrData = `PNR:${pnr}|BOOKING:${bookingId}|DATE:${new Date().toISOString()}`;
    const qrImage = await QRCode.toDataURL(qrData, { width: 80, margin: 1 });
    
    // Add QR code to right side
    doc.addImage(qrImage, 'PNG', 160, 8, 35, 35);
    
    // Journey Details Section
    doc.setTextColor(...darkText);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Journey Details', 15, 55);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    let y = 65;
    const lineHeight = 7;
    
    doc.text(`Train: ${booking.train?.name || 'Mock Train'} (${booking.train?.number || 'N/A'})`, 15, y);
    y += lineHeight;
    doc.text(`Route: ${booking.from?.name || 'From'} -> ${booking.to?.name || 'To'}`, 15, y);
    y += lineHeight;
    doc.text(`Date: ${booking.journeyDate || '2026-10-31'}`, 15, y);
    y += lineHeight;
    doc.text(`Class: ${booking.classCode || 'N/A'}`, 15, y);
    y += lineHeight;
    doc.text(`Departure: ${booking.departureAt ? new Date(booking.departureAt).toLocaleTimeString() : 'N/A'}`, 15, y);
    y += lineHeight;
    
    // Passengers Section
    y += 5;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Passengers', 15, y);
    y += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    if (booking.passengers && booking.passengers.length > 0) {
      booking.passengers.forEach((p, i) => {
        const seatInfo = p.coach && p.seat ? `${p.coach}/${p.seat}` : 'N/A';
        doc.text(`${i + 1}. ${p.name} | Age: ${p.age} | Seat: ${seatInfo}`, 15, y);
        y += lineHeight;
      });
    }
    
    // Fare Details Section
    y += 5;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Fare Details', 15, y);
    y += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Base Fare:', 15, y);
    doc.text(`₹${booking.fare?.base || '0'}`, 150, y);
    y += lineHeight;
    doc.text('Reservation Charge:', 15, y);
    doc.text(`₹${booking.fare?.reservationCharge || '50'}`, 150, y);
    y += lineHeight;
    doc.text('GST:', 15, y);
    doc.text(`₹${booking.fare?.gst || '0'}`, 150, y);
    y += lineHeight;
    
    // Total
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    y += 2;
    doc.line(15, y - 2, 190, y - 2);
    y += 5;
    doc.text('Total Amount:', 15, y);
    doc.text(`₹${booking.fare?.total || '0'}`, 150, y);
    
    // Footer
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Mock e-ticket for demonstration. Not affiliated with IRCTC.', 15, 270);
    
    // Save PDF
    doc.save(`ticket-${pnr || bookingId}.pdf`);
    
    return { success: true };
  } catch (error) {
    console.error('PDF generation error:', error);
    return { success: false, error: error.message };
  }
}

// ============= END MOCK DATA =============

export const tokenStore = {
  get: () => { try { return localStorage.getItem(TOKEN_KEY); } catch { return null; } },
  set: (t) => { try { localStorage.setItem(TOKEN_KEY, t); } catch { /* storage unavailable */ } },
  clear: () => { try { localStorage.removeItem(TOKEN_KEY); } catch { /* storage unavailable */ } },
};

export class ApiError extends Error {
  constructor(status, code, message, details = []) {
    super(message);
    this.status = status; this.code = code; this.details = details;
  }
}

let onUnauthorized = null;
export const setUnauthorizedHandler = (fn) => { onUnauthorized = fn; };

async function request(path, { method = 'GET', body, headers = {}, raw = false } = {}) {
  const token = tokenStore.get();
  let res;
  try {
    res = await fetch(`${BASE}${path}`, {
      method,
      headers: { ...(body ? { 'Content-Type': 'application/json' } : {}), ...(token ? { Authorization: `Bearer ${token}` } : {}), ...headers },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch (err) {
    throw new ApiError(0, 'NETWORK', 'Cannot reach the server. Check your connection and try again.');
  }
  if (raw && res.ok) return res;
  let json = null;
  try { json = await res.json(); } catch { /* non-JSON error */ }
  if (!res.ok || json?.success === false) {
    const e = json?.error || {};
    if (res.status === 401 && token && onUnauthorized) onUnauthorized();
    throw new ApiError(res.status, e.code || 'ERROR', e.message || 'Something went wrong', e.details || []);
  }
  return json.data;
}

const qs = (o) => new URLSearchParams(Object.entries(o).filter(([, v]) => v !== '' && v != null)).toString();

export const api = {
  // auth & profile
  register: (b) => mockRegister(b),
  login: (b) => mockLogin(b),
  me: () => mockMe(),
  updateProfile: (b) => request('/api/users/me', { method: 'PATCH', body: b }),
  // catalog
  stations: (q = '') => mockStations(q),
  search: (p) => mockSearch2(p),
  train: (id, p = {}) => mockTrain(id, p),
  // bookings
  createBooking: (b, key) => mockCreateBooking(b),
  myBookings: (p = {}) => mockGetBookings(p),
  booking: (id) => mockGetBooking(id),
  pnr: (pnr) => mockGetPnrStatus(pnr),
  refundPreview: (id) => request(`/api/bookings/${id}/refund-preview`),
  cancel: (id) => request(`/api/bookings/${id}/cancel`, { method: 'POST' }),
  // payments (mock)
  initiatePayment: (bookingId) => mockPaymentInitiate(bookingId),
  confirmPayment: (paymentId, outcome) => mockPaymentConfirm(paymentId, outcome),
  // tickets
  verifyTicket: (token) => request(`/api/tickets/verify/${token}`),
  async downloadTicket(id, pnr) {
    return mockDownloadTicket(id, pnr);
  },
  // admin
  admin: {
    stats: () => request('/api/admin/stats'),
    bookings: (p = {}) => request(`/api/admin/bookings?${qs(p)}`),
    trains: () => request('/api/admin/trains'),
    createTrain: (b) => request('/api/admin/trains', { method: 'POST', body: b }),
    updateTrain: (id, b) => request(`/api/admin/trains/${id}`, { method: 'PATCH', body: b }),
    deleteTrain: (id) => request(`/api/admin/trains/${id}`, { method: 'DELETE' }),
    createStation: (b) => request('/api/admin/stations', { method: 'POST', body: b }),
    updateStation: (id, b) => request(`/api/admin/stations/${id}`, { method: 'PATCH', body: b }),
    deleteStation: (id) => request(`/api/admin/stations/${id}`, { method: 'DELETE' }),
    schedules: () => request('/api/admin/schedules'),
    createSchedule: (b) => request('/api/admin/schedules', { method: 'POST', body: b }),
    updateSchedule: (id, b) => request(`/api/admin/schedules/${id}`, { method: 'PATCH', body: b }),
    deleteSchedule: (id) => request(`/api/admin/schedules/${id}`, { method: 'DELETE' }),
    inventory: (p = {}) => request(`/api/admin/inventory?${qs(p)}`),
    generateInventory: (b) => request('/api/admin/inventory/generate', { method: 'POST', body: b }),
    deleteInventory: (id) => request(`/api/admin/inventory/${id}`, { method: 'DELETE' }),
  },
};
