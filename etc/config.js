require('dotenv').config();

// TODO: Converte most (all?) of these to take env variables
const HOME_PATH = '/home/pi/teslacam';
const IMAGE_DIR = `${HOME_PATH}/images`;
const BACKUP_DIR = `${HOME_PATH}/video`;

/*
 File size per minute of footage, 28MiB
 Minutes of recording: 30
 Number of cameras recording: 3
 Disk image size: 30 * 28 * 3= 2520MiB + margin of error
 */
const IMAGE_SIZE_MB = process.env.IMAGE_SIZE_MB || 3072;
const RECORD_WINDOW_MS = 30 * 60 * 1000;
const IMAGE_MOUNT_POINT = '/mnt';
const DROPBOX_UPLOADER = '/home/pi/dropbox_uploader.sh';
const DELETE_ON_UPLOAD = true;
const LOCK_FILE_NAME = 'lock';
const WAIT_INTERVAL = 30 * 1000;
const MAX_DISK_UTILISATION_PERCENT = 0.8;
const USE_SSH = process.env.USE_SSH || false;
const TESLACAM_IP = process.env.TESLACAM_IP || '172.17.0.1';
const NUMBER_OF_DAYS_TO_KEEP = process.env.NUMBER_OF_DAYS_TO_KEEP || 5;
const { RSYNC_TARGET } = process.env;
// An apparent bug in the Tesla software causes the dashcam to be unmounted whilst the car is not actively powered up
// A reboot is required to restore dashcam functionality, it may be better to simply pause the dashcam whilst parked
// This wont resolve the problem whilst charging away from home.
const PAUSE_RECORDING_ON_WIFI = false;

module.exports = {
  IMAGE_DIR,
  BACKUP_DIR,
  IMAGE_SIZE_MB,
  IMAGE_MOUNT_POINT,
  RECORD_WINDOW_MS,
  DROPBOX_UPLOADER,
  LOCK_FILE_NAME,
  WAIT_INTERVAL,
  HOME_PATH,
  DELETE_ON_UPLOAD,
  MAX_DISK_UTILISATION_PERCENT,
  PAUSE_RECORDING_ON_WIFI,
  USE_SSH,
  TESLACAM_IP,
  RSYNC_TARGET,
  NUMBER_OF_DAYS_TO_KEEP
};
